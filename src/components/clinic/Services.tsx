import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, AlignVerticalSpaceAround, Baby, Wrench, Smile, ShieldCheck, Heart, Scissors, Stethoscope, Scan, ScanFace, FileCheck } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Blanqueamiento Dental", desc: "Sonrisa más brillante con tecnología LED de última generación." },
  { icon: AlignVerticalSpaceAround, title: "Ortodoncia", desc: "Brackets metálicos, estéticos e invisibles para todas las edades." },
  { icon: Baby, title: "Odontopediatría", desc: "Cuidado dental especializado para los más pequeños del hogar." },
  { icon: Wrench, title: "Implantes Dentales", desc: "Reemplazo permanente con implantes de titanio de alta calidad." },
  { icon: Smile, title: "Diseño de Sonrisa", desc: "Planificación digital para una sonrisa armónica y natural." },
  { icon: ShieldCheck, title: "Limpieza Dental", desc: "Profilaxis profesional para una salud bucal óptima." },
  { icon: Heart, title: "Rehabilitación Oral", desc: "Restauración integral de la función y estética dental." },
  { icon: ScanFace, title: "Armonización Orofacial", desc: "Equilibrio facial con procedimientos mínimamente invasivos." },
  { icon: Stethoscope, title: "Endodoncia", desc: "Tratamiento de conductos con precisión y confort." },
  { icon: Scan, title: "Periodoncia", desc: "Cuidado especializado de encías y tejidos de soporte." },
  { icon: Scissors, title: "Cirugía Oral", desc: "Procedimientos quirúrgicos seguros y de rápida recuperación." },
  { icon: FileCheck, title: "Seguros Aceptados", desc: "Trabajamos con las principales aseguradoras del país." },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="section-padding bg-secondary/50">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Especialidades</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Cuidado integral para toda la <span className="italic">familia</span>
          </h2>
          <p className="text-muted-foreground">
            Ofrecemos un abanico completo de especialidades odontológicas, respaldadas por profesionales certificados y tecnología de punta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass-card rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 flex items-center justify-center mb-4 transition-colors">
                <s.icon className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="font-sans font-semibold text-foreground text-sm mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
