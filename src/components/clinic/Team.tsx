import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const team = [
  {
    name: "Dra. María Luján",
    role: "Directora Clínica · Prostodoncista",
    img: doctor1,
    desc: "Más de 15 años liderando casos complejos de rehabilitación oral y diseño de sonrisa.",
  },
  {
    name: "Dr. Carlos Méndez",
    role: "Implantología Oral",
    img: doctor2,
    desc: "Especialista en implantes de carga inmediata y regeneración ósea guiada.",
  },
  {
    name: "Dra. Valentina Reyes",
    role: "Ortodoncia · Ortopedia Maxilar",
    img: doctor3,
    desc: "Certificada en alineadores invisibles y ortodoncia lingual de última generación.",
  },
];

export default function Team() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="equipo" className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Nuestro equipo</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Profesionales que <span className="italic">inspiran confianza</span>
          </h2>
          <p className="text-muted-foreground">
            Un equipo multidisciplinario comprometido con tu bienestar y con los más altos estándares de la odontología moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className={`team-card-motion ${isVisible ? "is-visible" : ""}`}
                style={{ animationDelay: `${index * 220}ms` }}
              >
                <div className="doctor-portrait-shell relative rounded-2xl overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="doctor-portrait-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-20 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-cyan text-sm font-medium mt-1 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
