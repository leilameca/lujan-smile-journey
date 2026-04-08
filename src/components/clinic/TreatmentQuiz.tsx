import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const questions = [
  {
    question: "¿Qué te gustaría mejorar de tu sonrisa?",
    options: [
      { label: "El color de mis dientes", value: "color" },
      { label: "La alineación", value: "alignment" },
      { label: "Tengo dientes faltantes", value: "missing" },
      { label: "Quiero una transformación completa", value: "full" },
    ],
  },
  {
    question: "¿Cuál es tu rango de edad?",
    options: [
      { label: "Menor de 18 años", value: "child" },
      { label: "18 - 35 años", value: "young" },
      { label: "36 - 55 años", value: "adult" },
      { label: "Mayor de 55 años", value: "senior" },
    ],
  },
  {
    question: "¿Qué es más importante para ti?",
    options: [
      { label: "Resultados rápidos", value: "speed" },
      { label: "Mínima invasividad", value: "minimal" },
      { label: "Durabilidad a largo plazo", value: "durability" },
      { label: "La mejor estética posible", value: "aesthetics" },
    ],
  },
];

type ResultMap = Record<string, { title: string; desc: string; treatments: string[] }>;

const results: ResultMap = {
  default: {
    title: "Diseño de Sonrisa Personalizado",
    desc: "Te recomendamos una evaluación integral para diseñar el plan perfecto para ti.",
    treatments: ["Diseño de Sonrisa", "Evaluación Digital"],
  },
  color: {
    title: "Blanqueamiento Profesional",
    desc: "Tu mejor opción para una sonrisa más brillante y luminosa, de forma rápida y segura.",
    treatments: ["Blanqueamiento LED", "Carillas Estéticas"],
  },
  alignment: {
    title: "Ortodoncia Especializada",
    desc: "Alinea tu sonrisa con las técnicas más modernas y discretas disponibles.",
    treatments: ["Ortodoncia Invisible", "Brackets Estéticos"],
  },
  missing: {
    title: "Rehabilitación con Implantes",
    desc: "Recupera tu sonrisa completa con implantes de titanio de la más alta calidad.",
    treatments: ["Implantes Dentales", "Rehabilitación Oral"],
  },
  full: {
    title: "Transformación Integral",
    desc: "Un rediseño completo que combina múltiples especialidades para resultados extraordinarios.",
    treatments: ["Diseño de Sonrisa", "Armonización Orofacial"],
  },
};

export default function TreatmentQuiz() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const next = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
      setSelected(answers[step - 1]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
  };

  const result = finished ? (results[answers[0]] || results.default) : null;

  return (
    <section className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-navy text-sm font-medium tracking-widest uppercase">Quiz interactivo</span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
              Encuentra tu tratamiento <span className="italic">ideal</span>
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            {!finished ? (
              <>
                <div className="flex gap-2 mb-8">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        i <= step ? "bg-navy" : "bg-border"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-2">Pregunta {step + 1} de {questions.length}</p>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-8">
                  {questions[step].question}
                </h3>

                <div className="grid gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelected(opt.value)}
                      className={`text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-medium text-sm ${
                        selected === opt.value
                          ? "border-navy bg-navy/10 text-navy-deep shadow-[0_10px_30px_-18px_hsl(var(--navy)/0.35)]"
                          : "border-border hover:border-navy/35 text-foreground/70"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Anterior
                  </button>
                  <button
                    onClick={next}
                    disabled={!selected}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-navy-light hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {step < questions.length - 1 ? "Siguiente" : "Ver resultado"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : result ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{result.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{result.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {result.treatments.map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-navy/10 text-navy text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-navy-light hover:-translate-y-0.5"
                  >
                    Agendar evaluación <ArrowRight className="w-4 h-4" />
                  </a>
                  <button onClick={reset} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Intentar de nuevo
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
