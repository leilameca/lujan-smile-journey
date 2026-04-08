import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18095551234?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-3 rounded-full border border-cyan/20 bg-navy-deep/95 px-3 py-3 sm:pr-5 backdrop-blur-xl shadow-[0_18px_40px_-18px_hsl(var(--navy-deep)/0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_24px_50px_-20px_hsl(var(--navy-deep)/0.72)]"
      aria-label="Contactar por WhatsApp"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 shadow-inner shadow-cyan/10">
        <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-[#25D366]" />
        <MessageCircle className="h-5 w-5 text-cyan" />
      </span>

      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.22em] text-cyan/80">WhatsApp</span>
        <span className="text-sm font-medium text-primary-foreground">Agenda tu cita</span>
      </span>

      <span className="absolute -top-12 right-2 rounded-full border border-border/60 bg-card/95 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1 whitespace-nowrap pointer-events-none">
        Conversemos por WhatsApp
      </span>
    </a>
  );
}
