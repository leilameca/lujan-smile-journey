import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "+5,000", label: "Pacientes satisfechos" },
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: Clock, value: "2", label: "Sedes en el país" },
  { icon: Shield, value: "12+", label: "Especialidades" },
];

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative -mt-16 z-10">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 mb-3 group-hover:bg-cyan/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-cyan" />
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
