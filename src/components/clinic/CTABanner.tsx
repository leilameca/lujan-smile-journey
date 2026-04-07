import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-navy-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cyan blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Tu mejor sonrisa <span className="italic text-gradient-cyan">comienza hoy</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto mb-8">
              Agenda tu evaluación sin compromiso y descubre lo que la odontología moderna puede hacer por ti.
            </p>
            <a href="#contacto" className="btn-primary-clinic text-base">
              Agenda tu cita ahora <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
