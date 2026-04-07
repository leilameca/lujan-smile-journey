import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto dura una primera consulta de evaluación?",
    a: "La evaluación inicial tiene una duración aproximada de 45 minutos a 1 hora. Incluye examen clínico, radiografías digitales si son necesarias, y una conversación detallada sobre tus objetivos y plan de tratamiento.",
  },
  {
    q: "¿Trabajan con seguros dentales?",
    a: "Sí, aceptamos la mayoría de los seguros dentales del país. Te recomendamos contactarnos con los datos de tu póliza para verificar la cobertura específica de tu plan.",
  },
  {
    q: "¿Los tratamientos son dolorosos?",
    a: "Utilizamos técnicas de anestesia moderna y sedación consciente cuando es necesario. Nuestro objetivo es que cada procedimiento sea lo más cómodo posible. La mayoría de nuestros pacientes reportan una experiencia mucho mejor de lo que esperaban.",
  },
  {
    q: "¿Cuánto tiempo toma un diseño de sonrisa?",
    a: "Dependiendo de la complejidad del caso, un diseño de sonrisa puede completarse en 2 a 4 citas. Utilizamos planificación digital para que puedas ver el resultado esperado antes de iniciar.",
  },
  {
    q: "¿Ofrecen facilidades de pago?",
    a: "Sí, ofrecemos planes de financiamiento flexibles adaptados a cada tratamiento. Consulta con nuestro equipo las opciones disponibles para tu caso.",
  },
  {
    q: "¿Qué medidas de bioseguridad manejan?",
    a: "Seguimos protocolos estrictos de esterilización y desinfección certificados. Cada instrumento es esterilizado en autoclave, utilizamos material desechable cuando es posible, y mantenemos los más altos estándares de higiene.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan text-sm font-medium tracking-widest uppercase">Preguntas frecuentes</span>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3">
              Resolvemos tus <span className="italic">dudas</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-foreground text-sm font-medium text-left hover:no-underline hover:text-cyan transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
