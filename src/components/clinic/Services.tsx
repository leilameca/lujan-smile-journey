import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImg from "@/assets/hero-clinic.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import doctorOne from "@/assets/doctor-1.jpg";
import doctorTwo from "@/assets/doctor-2.jpg";
import doctorThree from "@/assets/doctor-3.jpg";
import {
  Sparkles,
  AlignVerticalSpaceAround,
  Baby,
  Wrench,
  Smile,
  ShieldCheck,
  Heart,
  Scissors,
  Stethoscope,
  Scan,
  ScanFace,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type ProcessStep = {
  title: string;
  detail: string;
};

type AssetImage = {
  filename: string;
  normalizedName: string;
  src: string;
};

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  focus: string;
  candidate: string;
  procedure: string;
  duration: string;
  recovery: string;
  overview: string[];
  highlights: string[];
  process: ProcessStep[];
  gallery: GalleryItem[];
};

type ServiceSeed = {
  icon: LucideIcon;
  title: string;
  desc: string;
  fallbackImage: string;
  imageKeywords: string[];
  focus: string;
  candidate: string;
  procedure: string;
  duration: string;
  recovery: string;
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

const assetImages = Object.entries(
  import.meta.glob("/src/assets/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
)
  .map(([path, src]) => {
    const filename = path.split("/").pop() ?? path;

    return {
      filename,
      normalizedName: normalizeText(filename),
      src,
    };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename)) satisfies AssetImage[];

function findMatchedImages(keywords: string[]) {
  const normalizedKeywords = keywords.map(normalizeText);

  return assetImages.filter((image) =>
    normalizedKeywords.some((keyword) => image.normalizedName.includes(keyword)),
  );
}

function dedupeGallery(items: GalleryItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.src)) {
      return false;
    }

    seen.add(item.src);
    return true;
  });
}

const placeholderGalleryBase = [
  {
    src: doctorOne,
    alt: "Paciente en evaluacion dental",
    caption: "Evaluacion inicial y registro visual del caso.",
  },
  {
    src: doctorTwo,
    alt: "Detalle de atencion clinica",
    caption: "Acompanamiento profesional durante cada etapa del proceso.",
  },
  {
    src: clinicImg,
    alt: "Area clinica de referencia",
    caption: "Espacios y equipo clinico como apoyo visual del tratamiento.",
  },
];

function createService(seed: ServiceSeed): Service {
  const matchedImages = findMatchedImages(seed.imageKeywords);
  const primaryMatch = matchedImages[0];
  const image = primaryMatch?.src ?? seed.fallbackImage;
  const matchedGallery = matchedImages.map((matchedImage, index) => ({
    src: matchedImage.src,
    alt: `Referencia visual de ${seed.title}`,
    caption:
      index === 0
        ? `Imagen principal relacionada con ${seed.title.toLowerCase()}.`
        : `Imagen adicional cargada para ${seed.title.toLowerCase()}.`,
  }));

  return {
    ...seed,
    image,
    overview: [
      `El tratamiento de ${seed.title.toLowerCase()} se diseña para ${seed.focus}. Antes de comenzar realizamos una valoracion clinica completa, revisamos expectativas y definimos un plan que se adapte a tu caso.`,
      `Esta ficha funciona como una base tipo mini blog para que luego puedas sustituir textos, testimonios e imagenes reales. La idea es que cada especialidad tenga su propio espacio informativo sin salir de la experiencia visual del sitio.`,
    ],
    highlights: [
      `Ideal para ${seed.candidate}.`,
      `Duracion estimada: ${seed.duration}.`,
      `Recuperacion o seguimiento: ${seed.recovery}.`,
    ],
    process: [
      {
        title: "Valoracion inicial",
        detail: `Revisamos tu sonrisa, resolvemos dudas y confirmamos si eres candidato para ${seed.title.toLowerCase()}.`,
      },
      {
        title: "Planificacion del caso",
        detail: `Organizamos tiempos, materiales y el protocolo indicado para obtener un resultado predecible y armonico.`,
      },
      {
        title: "Procedimiento guiado",
        detail: seed.procedure,
      },
      {
        title: "Control y seguimiento",
        detail: `Finalizamos con recomendaciones personalizadas, revisiones posteriores y acompanamiento durante ${seed.recovery}.`,
      },
    ],
    gallery: dedupeGallery([
      {
        src: image,
        alt: `Imagen referencial de ${seed.title}`,
        caption: `Portada visual referencial para ${seed.title.toLowerCase()}.`,
      },
      ...matchedGallery,
      ...placeholderGalleryBase,
    ]),
  };
}

const services: Service[] = [
  createService({
    icon: Sparkles,
    title: "Blanqueamiento Dental",
    desc: "Sonrisa mas brillante con tecnologia LED de ultima generacion.",
    fallbackImage: heroImg,
    imageKeywords: ["blanqueamiento"],
    focus: "mejorar el tono del esmalte y devolver luminosidad a la sonrisa",
    candidate: "pacientes que desean una sonrisa mas clara y uniforme",
    procedure: "Aplicamos el protocolo blanqueador seleccionado con control de sensibilidad y seguimiento del cambio de tono.",
    duration: "1 a 2 citas",
    recovery: "cuidados simples durante los primeros dias",
  }),
  createService({
    icon: AlignVerticalSpaceAround,
    title: "Ortodoncia",
    desc: "Brackets metalicos, esteticos e invisibles para todas las edades.",
    fallbackImage: doctorOne,
    imageKeywords: ["ortodoncia", "alineacion", "brackets"],
    focus: "alinear la mordida, mejorar la funcion y dar armonia a la sonrisa",
    candidate: "adolescentes y adultos con apiñamiento, espacios o mordidas irregulares",
    procedure: "Instalamos y ajustamos el sistema ortodontico elegido, con controles periodicos para guiar el movimiento dental.",
    duration: "varios meses segun el caso",
    recovery: "adaptacion progresiva y controles periodicos",
  }),
  createService({
    icon: Baby,
    title: "Odontopediatria",
    desc: "Cuidado dental especializado para los mas pequenos del hogar.",
    fallbackImage: doctorTwo,
    imageKeywords: ["odontopediatria", "pediatria", "prevencion"],
    focus: "prevenir, diagnosticar y tratar a tiempo la salud bucal infantil",
    candidate: "ninos en etapa de crecimiento y familias que buscan seguimiento preventivo",
    procedure: "Combinamos revision, educacion, terapias preventivas y tratamiento adaptado a la edad del paciente.",
    duration: "citas breves y amables",
    recovery: "seguimiento preventivo continuo",
  }),
  createService({
    icon: Wrench,
    title: "Implantes Dentales",
    desc: "Reemplazo permanente con implantes de titanio de alta calidad.",
    fallbackImage: clinicImg,
    imageKeywords: ["implante", "implantes", "corona", "coronas", "crown", "zirconia"],
    focus: "recuperar piezas perdidas con estabilidad, funcion y estetica natural",
    candidate: "pacientes con ausencias dentales que buscan una solucion fija",
    procedure: "Planificamos digitalmente la colocacion del implante y la posterior rehabilitacion de la pieza ausente.",
    duration: "varias etapas clinicas",
    recovery: "controles de integracion y cicatrizacion",
  }),
  createService({
    icon: Smile,
    title: "Diseno de Sonrisa",
    desc: "Planificacion digital para una sonrisa armonica y natural.",
    fallbackImage: heroImg,
    imageKeywords: ["diseno", "sonrisa", "estetica"],
    focus: "mejorar proporcion, forma y expresion de la sonrisa",
    candidate: "personas que desean una renovacion estetica integral",
    procedure: "Creamos una propuesta visual y luego ejecutamos el tratamiento por fases segun las metas esteticas definidas.",
    duration: "segun la complejidad del caso",
    recovery: "acompanamiento estetico y controles finales",
  }),
  createService({
    icon: ShieldCheck,
    title: "Limpieza Dental",
    desc: "Profilaxis profesional para una salud bucal optima.",
    fallbackImage: doctorThree,
    imageKeywords: ["limpieza"],
    focus: "retirar placa, sarro y manchas superficiales para mantener una boca sana",
    candidate: "pacientes en mantenimiento preventivo o con acumulacion de sarro",
    procedure: "Realizamos limpieza profesional, pulido y orientacion de higiene oral personalizada.",
    duration: "una cita corta",
    recovery: "inmediata con recomendaciones de higiene",
  }),
  createService({
    icon: Heart,
    title: "Rehabilitacion Oral",
    desc: "Restauracion integral de la funcion y estetica dental.",
    fallbackImage: clinicImg,
    imageKeywords: ["rehabilitacion", "reconstruccion", "corona", "zirconia"],
    focus: "reconstruir sonrisas con perdida funcional, desgaste o ausencias multiples",
    candidate: "pacientes que necesitan una solucion integral y planificada",
    procedure: "Integramos varias especialidades para devolver comodidad al masticar, hablar y sonreir.",
    duration: "tratamiento por fases",
    recovery: "seguimiento clinico segun cada etapa",
  }),
  createService({
    icon: ScanFace,
    title: "Armonizacion Orofacial",
    desc: "Equilibrio facial con procedimientos minimamente invasivos.",
    fallbackImage: doctorTwo,
    imageKeywords: ["armonizacion", "facial", "estetica"],
    focus: "equilibrar rasgos faciales y complementar la estetica de la sonrisa",
    candidate: "pacientes que buscan un resultado sutil y natural",
    procedure: "Evaluamos proporciones faciales y aplicamos el protocolo adecuado de forma conservadora y planificada.",
    duration: "1 a 2 sesiones segun el plan",
    recovery: "cuidados breves y seguimiento estetico",
  }),
  createService({
    icon: Stethoscope,
    title: "Endodoncia",
    desc: "Tratamiento de conductos con precision y confort.",
    fallbackImage: doctorOne,
    imageKeywords: ["endodoncia", "conducto"],
    focus: "tratar infecciones o dolor pulpar y conservar la pieza dental",
    candidate: "pacientes con dolor, sensibilidad intensa o infeccion interna",
    procedure: "Desinfectamos el sistema de conductos y sellamos la pieza para preservar su funcion.",
    duration: "1 a 2 citas segun la pieza",
    recovery: "control del dolor y restauracion posterior",
  }),
  createService({
    icon: Scan,
    title: "Periodoncia",
    desc: "Cuidado especializado de encias y tejidos de soporte.",
    fallbackImage: clinicImg,
    imageKeywords: ["periodoncia", "encia", "encias", "prevencion"],
    focus: "proteger encias, hueso y estructuras que sostienen los dientes",
    candidate: "pacientes con sangrado, inflamacion o enfermedad periodontal",
    procedure: "Aplicamos terapia periodontal segun el diagnostico y reforzamos la rutina de cuidado en casa.",
    duration: "segun fase y mantenimiento",
    recovery: "monitoreo periodontal continuo",
  }),
  createService({
    icon: Scissors,
    title: "Cirugia Oral",
    desc: "Procedimientos quirurgicos seguros y de rapida recuperacion.",
    fallbackImage: doctorThree,
    imageKeywords: ["cirugia", "reconstruccion"],
    focus: "resolver extracciones complejas y otros procedimientos con planificacion segura",
    candidate: "casos que requieren intervencion quirurgica controlada",
    procedure: "Preparamos la cirugia, ejecutamos el procedimiento con precision y explicamos cada paso del postoperatorio.",
    duration: "variable segun intervencion",
    recovery: "postoperatorio guiado con controles",
  }),
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const isMobile = useIsMobile();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="servicios" className="section-padding bg-secondary/50">
        <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan text-sm font-medium tracking-widest uppercase">Especialidades</span>
            <h2
              className={`heading-display services-heading text-3xl md:text-4xl text-foreground mt-3 mb-4 ${
                isMobile ? `services-heading-mobile ${isVisible ? "is-active" : ""}` : "services-heading-desktop"
              }`}
            >
              <span className="services-heading-line">Cuidado integral</span>
              <span className="services-heading-line">
                para toda la <span className="services-heading-highlight italic">familia</span>
              </span>
            </h2>
            <p className="text-muted-foreground">
              Ofrecemos un abanico completo de especialidades odontologicas, respaldadas por profesionales certificados y tecnologia de punta.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/10 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-navy" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed min-h-[3rem]">{service.desc}</p>

                  <Button
                    variant="ghost"
                    className="mt-4 h-auto px-0 py-0 text-navy hover:bg-transparent hover:text-navy-light"
                    onClick={() => setSelectedService(service)}
                  >
                    Saber mas
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedService)} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService ? (
          <DialogContent className="w-[min(94vw,1100px)] max-w-5xl overflow-hidden border-border/60 bg-background/95 p-0 backdrop-blur-xl">
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-60 md:h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/55 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                    <selectedService.icon className="w-4 h-4 text-cyan" />
                    <span className="text-xs font-medium tracking-[0.22em] uppercase text-white/85">
                      Especialidad
                    </span>
                  </div>

                  <DialogTitle className="heading-display mt-4 text-3xl md:text-5xl text-white">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
                    {selectedService.desc}
                  </DialogDescription>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan mb-3">
                      <Clock3 className="w-4 h-4 text-navy" />
                      Duracion
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedService.duration}</p>
                  </div>

                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan mb-3">
                      <CheckCircle2 className="w-4 h-4 text-navy" />
                      Seguimiento
                    </div>
                    <p className="text-sm font-semibold text-foreground">{selectedService.recovery}</p>
                  </div>

                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan mb-3">
                      <ImageIcon className="w-4 h-4 text-navy" />
                      Galeria
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Base editable con imagenes de referencia
                    </p>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="w-full" key={selectedService.title}>
                  <TabsList className="h-auto w-full justify-start rounded-none bg-transparent p-0 gap-2 overflow-x-auto">
                    <TabsTrigger
                      value="overview"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Vision general
                    </TabsTrigger>
                    <TabsTrigger
                      value="process"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Proceso
                    </TabsTrigger>
                    <TabsTrigger
                      value="gallery"
                      className="rounded-full border border-border bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      Galeria
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
                      <div className="space-y-4">
                        {selectedService.overview.map((paragraph) => (
                          <p key={paragraph} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="glass-card rounded-2xl p-5">
                        <h3 className="font-sans text-sm font-semibold text-foreground mb-4">
                          Lo mas importante de este tratamiento
                        </h3>
                        <div className="space-y-3">
                          {selectedService.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="process" className="mt-6">
                    <div className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <div key={step.title} className="glass-card rounded-2xl p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-sans text-base font-semibold text-foreground">{step.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                {step.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      {selectedService.gallery.map((image) => (
                        <figure key={`${selectedService.title}-${image.caption}`} className="glass-card rounded-2xl overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-56 w-full object-cover"
                            loading="lazy"
                          />
                          <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                            {image.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
