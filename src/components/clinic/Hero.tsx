import heroImg from "@/assets/hero-clinic.jpg";
import { ArrowRight } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
      </div>

      <div className="relative container-narrow pt-32 pb-20">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-xs tracking-wide font-medium">Santiago · Mao</span>
          </div>

          <h1
            className="heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Tu sonrisa merece{" "}
            <span className="text-gradient-cyan italic">excelencia</span>
          </h1>

          <p
            className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Odontología especializada con tecnología de vanguardia, calidez humana y resultados que transforman.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#contacto" className="btn-primary-clinic">
              Agenda tu evaluación
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#smile-journey" className="btn-outline-clinic">
              Descubre tu Smile Journey
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
