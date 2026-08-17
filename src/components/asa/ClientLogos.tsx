import abra from "@/assets/client-abra.png.asset.json";
import arajet from "@/assets/client-arajet.png.asset.json";
import avianca from "@/assets/client-avianca.png.asset.json";
import gol from "@/assets/client-gol.png.asset.json";
import taag from "@/assets/client-taag.png.asset.json";

const LOGOS = [
  { name: "Abra Group", src: abra.url },
  { name: "Arajet", src: arajet.url },
  { name: "Avianca", src: avianca.url },
  { name: "GOL Linhas Aéreas", src: gol.url },
  { name: "TAAG Angola Airlines", src: taag.url },
];

const CLIENT_TYPES = [
  "Airlines",
  "MRO organizations",
  "Lessors & asset owners",
  "OEM & technical services",
  "Aviation authorities",
  "Investors & advisors",
];

export function ClientLogos({ invert = true }: { invert?: boolean }) {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="min-w-0">
      <div
        className={`relative overflow-hidden border-y py-8 md:py-10 ${
          invert ? "border-rule-invert" : "border-rule"
        }`}
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="marquee-track flex w-max items-center gap-12 md:gap-20">
          {track.map((logo, i) => (
            <li key={`${logo.name}-${i}`} className="shrink-0">
              <img
                src={logo.src}
                alt={i < LOGOS.length ? `${logo.name} logo` : ""}
                aria-hidden={i >= LOGOS.length}
                loading="lazy"
                className={`h-6 w-auto object-contain opacity-55 transition-opacity duration-500 hover:opacity-100 md:h-8 ${
                  invert ? "brightness-0 invert" : "grayscale"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
