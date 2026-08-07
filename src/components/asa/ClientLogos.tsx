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

export function ClientLogos() {
  const track = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div>
      <div className="group relative overflow-hidden border-y border-rule py-10">
        <div className="marquee-track flex w-max items-center gap-20 group-hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={`${logo.name} logo`}
              loading="lazy"
              className="h-9 w-auto max-w-[10rem] shrink-0 object-contain grayscale opacity-45 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,var(--color-warm-white),transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,var(--color-warm-white),transparent)]" />
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {CLIENT_TYPES.map((type) => (
          <span
            key={type}
            className="type-label relative overflow-hidden rounded-full border border-rule px-5 py-3 text-muted-foreground transition-colors duration-500 hover:border-asa-blue hover:text-primary-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-asa-blue transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-0" />
            <span className="relative">{type}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
