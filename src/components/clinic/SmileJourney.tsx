import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Search, Wrench, Star, Heart } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Evaluación", desc: "Escuchamos tus necesidades y realizamos un diagnóstico visual completo." },
  { icon: Search, title: "Diagnóstico", desc: "Utilizamos tecnología digital para un análisis preciso y personalizado." },
  { icon: Wrench, title: "Tratamiento", desc: "Ejecutamos tu plan con los más altos estándares de calidad y confort." },
  { icon: Star, title: "Resultado", desc: "Resultados visibles que superan expectativas y transforman sonrisas." },
  { icon: Heart, title: "Confianza", desc: "Te acompañamos con seguimiento continuo para mantener tu sonrisa." },
];

export default function SmileJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolledInto = viewportHeight - rect.top;
      const totalScroll = sectionHeight + viewportHeight;
      const p = Math.max(0, Math.min(1, scrolledInto / totalScroll));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="smile-journey" ref={sectionRef} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan blur-[100px]" />
      </div>

      <div className="container-narrow relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Tu experiencia</span>
          <h2 className="heading-display text-3xl md:text-4xl text-primary-foreground mt-3 mb-4">
            Smile <span className="italic text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-primary-foreground/60">
            Un recorrido pensado para que cada paso hacia tu sonrisa ideal sea una experiencia excepcional.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cyan/20 md:-translate-x-px">
            <div
              className="w-full bg-gradient-to-b from-cyan to-cyan-light transition-all duration-100 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const stepThreshold = i / steps.length;
              const isActive = progress > stepThreshold + 0.05;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-6 md:gap-12 transition-all duration-700 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <h3 className="font-display text-xl text-primary-foreground font-semibold mb-2">{step.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isActive
                          ? "border-cyan bg-cyan/20 shadow-[0_0_20px_hsl(180_78%_55%/0.3)]"
                          : "border-cyan/20 bg-navy-deep"
                      }`}
                    >
                      <step.icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? "text-cyan" : "text-cyan/30"}`} />
                    </div>
                  </div>

                  <div className="flex-1 md:hidden">
                    <h3 className="font-display text-xl text-primary-foreground font-semibold mb-2">{step.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>

          {/* Smile curve at the end */}
          <div
            className={`flex justify-center mt-16 transition-all duration-1000 ${
              progress > 0.85 ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
              <path
                d="M10 15 Q60 55 110 15"
                stroke="hsl(180 78% 55%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className={progress > 0.85 ? "animate-pulse" : ""}
              />
              <circle cx="30" cy="8" r="3" fill="hsl(180 78% 55%)" opacity="0.6" />
              <circle cx="90" cy="8" r="3" fill="hsl(180 78% 55%)" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
