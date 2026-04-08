import { BadgeCheck, FileSearch, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import senasaLogo from "@/assets/senasa.webp";
import humanoLogo from "@/assets/humano.png";
import universalLogo from "@/assets/universal.png";
import mapfreLogo from "@/assets/mapfre.png";
import palicLogo from "@/assets/palic.png";
import monumentalLogo from "@/assets/manumental.png";

type Provider = {
  name: string;
  caption: string;
  logo: string;
  logoClassName?: string;
  cardClassName?: string;
};

const providers: Provider[] = [
  {
    name: "SENASA",
    caption: "Cobertura preventiva",
    logo: senasaLogo,
    logoClassName: "max-h-14",
    cardClassName: "from-cyan/10 via-white to-navy/10",
  },
  {
    name: "Humano",
    caption: "Planes de salud",
    logo: humanoLogo,
    logoClassName: "max-h-10",
    cardClassName: "from-navy/10 via-white to-cyan/10",
  },
  {
    name: "Universal",
    caption: "Gestion medica",
    logo: universalLogo,
    logoClassName: "max-h-10",
    cardClassName: "from-white via-cyan/10 to-navy/10",
  },
  {
    name: "MAPFRE",
    caption: "Salud dental",
    logo: mapfreLogo,
    logoClassName: "max-h-10",
    cardClassName: "from-cyan/10 via-white to-cyan/5",
  },
  {
    name: "PALIC",
    caption: "Cobertura corporativa",
    logo: palicLogo,
    logoClassName: "max-h-10",
    cardClassName: "from-white via-navy/5 to-cyan/10",
  },
  {
    name: "Monumental",
    caption: "Planes familiares",
    logo: monumentalLogo,
    logoClassName: "max-h-12",
    cardClassName: "from-navy/10 via-white to-cyan/10",
  },
];

export default function InsuranceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="seguros" className="section-padding">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Seguros</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Trabajamos con aseguradoras que hacen tu proceso <span className="italic">mas facil</span>
          </h2>
          <p className="text-muted-foreground">
            Aceptamos varias aseguradoras para ayudarte a validar tu cobertura y orientarte mejor antes de iniciar tratamiento.
          </p>
        </div>

        <div className="grid xl:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <div className="glass-card rounded-3xl p-7 md:p-8">
            <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
              <ShieldCheck className="w-7 h-7 text-navy" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              Validamos tu cobertura antes de iniciar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Te orientamos sobre compatibilidad de tu plan, documentos necesarios y alternativas de tratamiento para que el proceso administrativo sea mucho mas claro desde la primera cita.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Revisamos cobertura y condiciones antes de tu evaluacion.</p>
              </div>
              <div className="flex items-start gap-3">
                <FileSearch className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Te guiamos con documentos, compatibilidad del plan y los siguientes pasos administrativos.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providers.map((provider, index) => (
              <div
                key={provider.name}
                className={`glass-card rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`rounded-2xl border border-border/60 bg-gradient-to-br ${provider.cardClassName ?? "from-white to-white"} p-4 mb-4`}>
                  <div className="h-20 rounded-2xl bg-white/85 backdrop-blur-sm border border-white/60 flex items-center justify-center px-5 shadow-sm">
                    <img
                      src={provider.logo}
                      alt={`Logo de ${provider.name}`}
                      className={`w-auto max-w-full object-contain ${provider.logoClassName ?? "max-h-12"}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="font-sans text-base font-semibold text-foreground">{provider.name}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {provider.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
