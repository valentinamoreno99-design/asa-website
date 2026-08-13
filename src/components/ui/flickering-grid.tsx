import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
};

/**
 * Renders text as a flickering pixel grid on a canvas.
 * Falls back to plain text when canvas or motion is unavailable.
 */
export function FlickeringGridText({
  text,
  className,
  squareSize = 2,
  gridGap = 1,
  color = "#7FA8E8",
  maxOpacity = 0.55,
  flickerChance = 0.14,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [supported, setSupported] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setSupported(false);
      return;
    }

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let mask: Uint8Array = new Uint8Array(0);
    let baseFont = 0;
    let lines: string[] = [text];
    let squares: Float32Array = new Float32Array(0);
    let raf = 0;
    let running = false;
    let last = performance.now();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setup = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (width === 0 || height === 0) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const step = squareSize + gridGap;
      cols = Math.floor(width / step);
      rows = Math.floor(height / step);

      // Build a text mask offscreen at grid resolution.
      // Wrap onto two lines on narrow viewports so the slogan stays readable.
      if (width < 720) {
        const words = text.split(" ");
        const mid = Math.ceil(words.length / 2);
        lines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
      } else {
        lines = [text];
      }

      const off = document.createElement("canvas");
      off.width = Math.max(cols, 1);
      off.height = Math.max(rows, 1);
      const octx = off.getContext("2d");
      mask = new Uint8Array(cols * rows);
      if (octx) {
        const longest = lines.reduce((a, b) => (b.length > a.length ? b : a), "");
        const fontSize =
          Math.min((rows / lines.length) * 0.62, (width / Math.max(longest.length, 1)) * 1.5) / (squareSize + gridGap);
        octx.fillStyle = "#fff";
        octx.textAlign = "center";
        octx.textBaseline = "middle";
        baseFont = fontSize;
        octx.font = `500 ${fontSize}px Archivo, system-ui, sans-serif`;
        const lh = fontSize * 1.15;
        lines.forEach((line, li) => {
          octx.fillText(
            line,
            off.width / 2,
            off.height / 2 + (li - (lines.length - 1) / 2) * lh,
            off.width * 0.96,
          );
        });
        const data = octx.getImageData(0, 0, off.width, off.height).data;
        for (let i = 0; i < cols * rows; i++) {
          mask[i] = data[i * 4 + 3]! > 60 ? 1 : 0;
        }
      }

      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Legibility layer: the slogan itself, quietly present under the grid.
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `500 ${baseFont * (squareSize + gridGap) * dpr}px Archivo, system-ui, sans-serif`;
      const lhPx = baseFont * (squareSize + gridGap) * dpr * 1.15;
      lines.forEach((line, li) => {
        ctx.fillText(
          line,
          canvas.width / 2,
          canvas.height / 2 + (li - (lines.length - 1) / 2) * lhPx,
          canvas.width * 0.96,
        );
      });
      ctx.restore();
      const step = (squareSize + gridGap) * dpr;
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const i = y * cols + x;
          if (!mask[i]) continue;
          ctx.globalAlpha = Math.min(1, 0.45 + squares[i]!);
          ctx.fillStyle = color;
          ctx.fillRect(x * step, y * step, squareSize * dpr, squareSize * dpr);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      if (!running) return;
      const dt = (now - last) / 1000;
      last = now;
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * dt * 60 * 0.02) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    setup();
    draw();

    const ro = new ResizeObserver(() => {
      setup();
      draw();
    });
    ro.observe(container);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? start() : stop()));
    });
    io.observe(container);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
    };
  }, [text, squareSize, gridGap, color, maxOpacity, flickerChance, reduced]);

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      {reduced || !supported ? (
        <p className="flex h-full items-center justify-center text-center font-display text-[clamp(1.25rem,4vw,2.75rem)] leading-none tracking-[-0.03em] text-light-blue">
          {text}
        </p>
      ) : (
        <>
          <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />
          <span className="sr-only">{text}</span>
        </>
      )}
    </div>
  );
}
