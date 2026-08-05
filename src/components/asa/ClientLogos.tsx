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

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-5">
      {LOGOS.map((logo) => (
        <div key={logo.name} className="flex min-h-28 items-center justify-center bg-warm-white px-6 py-8">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            loading="lazy"
            className="max-h-10 w-auto max-w-[9rem] object-contain opacity-70 transition-opacity duration-500 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}
