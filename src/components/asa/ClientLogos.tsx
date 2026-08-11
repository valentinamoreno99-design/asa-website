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
  return (
    <div>
      <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 border-y border-rule-invert py-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
        {LOGOS.map((logo) => (
          <li key={logo.name} className="flex min-w-0 items-center justify-center">
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              loading="lazy"
              className="h-7 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-8"
            />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {CLIENT_TYPES.map((type) => (
          <span
            key={type}
            className="type-label rounded-full border border-rule-invert px-4 py-2.5 text-primary-foreground/60"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
