import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clinicImg from "@/assets/clinic-interior.jpg";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Tecnología digital de última generación",
  "Equipo multidisciplinario especializado",
  "Protocolos de bioseguridad certificados",
  "Atención personalizada y sin prisas",
];

export default function AboutClinic() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clinica" className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={clinicImg}
                alt="Interior moderno de la clínica"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-navy-gradient flex flex-col items-center justify-center text-primary-foreground shadow-xl">
              <span className="font-display text-3xl font-bold">15+</span>
              <span className="text-xs text-cyan mt-1">Años</span>
            </div>
          </div>

          <div>
            <span className="text-cyan text-sm font-medium tracking-widest uppercase">Sobre nosotros</span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Donde la ciencia se encuentra con la <span className="italic text-gradient-cyan">confianza</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En Luján Dental Clinic combinamos la precisión de la odontología moderna con un trato genuinamente humano. Cada paciente recibe un plan de tratamiento personalizado, desarrollado con los más altos estándares clínicos y la tecnología más avanzada del país.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
