import { useEffect, useState } from "react";

/**
 * Whisper reveal: words fade up and de-blur in sequence once mounted.
 */
export function WhisperHeadline({ text, className = "" }: { text: string; className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block will-change-transform"
            style={{
              opacity: ready ? 1 : 0,
              filter: ready ? "blur(0px)" : "blur(6px)",
              transform: ready ? "translateY(0)" : "translateY(0.5em)",
              transition: `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${i * 65}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 65}ms, filter 900ms cubic-bezier(0.22,1,0.36,1) ${i * 65}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </h1>
  );
}
