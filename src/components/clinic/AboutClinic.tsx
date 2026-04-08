import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clinicImg from "@/assets/clinic-interior.jpg";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Tecnología digital de última generación",
    desc: "Diagnósticos más precisos y tratamientos mejor planificados.",
  },
  {
    icon: Users,
    title: "Equipo multidisciplinario especializado",
    desc: "Profesionales coordinados para darte una atención integral.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos de bioseguridad certificados",
    desc: "Procesos clínicos seguros y consistentes en cada visita.",
  },
  {
    icon: Heart,
    title: "Atención personalizada y sin prisas",
    desc: "Tiempo, cercanía y acompañamiento real en cada consulta.",
  },
];

export default function AboutClinic() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clinica" className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan/10 via-transparent to-navy/10 blur-2xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} />
            <div className={`relative rounded-2xl overflow-hidden shadow-[0_24px_60px_-28px_hsl(var(--navy)/0.35)] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 -rotate-1"}`}>
              <img
                src={clinicImg}
                alt="Interior moderno de la clínica"
                className={`w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 ${isVisible ? "scale-100" : "scale-110"}`}
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div
              className={`absolute top-5 left-5 glass-card rounded-full px-4 py-2.5 flex items-center gap-2 text-sm text-foreground shadow-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="font-medium">Diagnóstico digital</span>
            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-navy-gradient flex flex-col items-center justify-center text-primary-foreground shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <span className="font-display text-3xl font-bold">15+</span>
              <span className="text-xs text-cyan mt-1">Años</span>
            </div>
          </div>

          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 mb-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "120ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-cyan text-sm font-medium tracking-widest uppercase">Sobre nosotros</span>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
              <span
                className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "180ms" }}
              >
                Donde la ciencia
              </span>
              <span
                className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "280ms" }}
              >
                se encuentra con la <span className="italic text-gradient-cyan">confianza</span>
              </span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-8 max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: "380ms" }}
            >
              En Luján Dental Clinic combinamos la precisión de la odontología moderna con un trato genuinamente humano. Cada paciente recibe un plan de tratamiento personalizado, desarrollado con los más altos estándares clínicos y la tecnología más avanzada del país.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`glass-card rounded-xl p-4 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${460 + i * 110}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-sm font-semibold leading-snug">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
