import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Martínez",
    treatment: "Diseño de Sonrisa",
    text: "Desde la primera consulta sentí que estaba en las mejores manos. El resultado superó todas mis expectativas. Mi sonrisa cambió mi vida.",
    rating: 5,
  },
  {
    name: "Roberto Familia",
    treatment: "Implantes Dentales",
    text: "Profesionalismo excepcional. Me explicaron cada paso del proceso y el resultado es completamente natural. No podría estar más agradecido.",
    rating: 5,
  },
  {
    name: "Ana García",
    treatment: "Ortodoncia Invisible",
    text: "Un equipo humano increíble. La clínica es impecable y la tecnología que utilizan es de primer nivel. Totalmente recomendada.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonios" className="section-padding bg-secondary/50">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Testimonios</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Historias que nos <span className="italic">enorgullecen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-8 relative group hover:-translate-y-1 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-cyan text-xs mt-0.5">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
