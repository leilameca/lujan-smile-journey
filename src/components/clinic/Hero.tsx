import heroImg from "@/assets/hero-clinic.jpg";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior premium de Luján Dental Clinic"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5, 20, 40, 0.85) 0%, rgba(5, 20, 40, 0.65) 35%, rgba(5, 20, 40, 0.2) 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5, 20, 40, 0.1) 0%, rgba(5, 20, 40, 0.04) 40%, rgba(5, 20, 40, 0.74) 100%)",
          }}
        />
      </div>

      <div className="relative container-narrow pt-32 pb-20 md:pt-36 lg:pt-40">
        <div className="max-w-[650px] lg:ml-[8%]">
          <div
            className="inline-flex flex-wrap items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-md mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-cyan fill-cyan" />
              <span className="text-primary-foreground text-xs font-medium tracking-wide">
                Más de 5,000 pacientes satisfechos
              </span>
            </span>
            <span className="hidden sm:block h-3.5 w-px bg-white/20" />
            <span className="text-primary-foreground/65 text-[11px] uppercase tracking-[0.22em]">
              Santiago · Mao
            </span>
          </div>

          <h1
            className="heading-display text-[clamp(3rem,6vw,4.5rem)] text-primary-foreground leading-[0.95] tracking-[-0.04em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="block">El placer de</span>
            <span className="block text-cyan italic">sonreír</span>
          </h1>

          <p
            className="text-primary-foreground/72 text-lg md:text-xl leading-relaxed max-w-[36rem] mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Odontología de alto nivel con tecnología avanzada, atención cercana y resultados diseñados para transformar tu sonrisa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-navy-deep transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_-10px_hsl(180_78%_55%/0.45)] hover:shadow-[0_18px_36px_-12px_hsl(180_78%_55%/0.5)]"
              style={{
                background: "linear-gradient(135deg, hsl(180 78% 55%), hsl(173 60% 43%))",
              }}
            >
              Agenda tu evaluación
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/8 px-7 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
            >
              Ver especialidades
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
