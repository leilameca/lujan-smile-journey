import { Instagram, Facebook } from "lucide-react";

const links = {
  servicios: [
    "Blanqueamiento",
    "Ortodoncia",
    "Implantes",
    "Diseño de Sonrisa",
    "Odontopediatría",
    "Armonización Orofacial",
  ],
  clinica: ["Sobre Nosotros", "Equipo Médico", "Tecnología", "Testimonios", "Blog"],
  legal: ["Política de Privacidad", "Términos y Condiciones"],
};

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-cyan-light flex items-center justify-center">
                <span className="font-display text-navy-deep font-bold text-xs">L</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-semibold text-base">Luján</span>
                <span className="text-cyan text-[9px] tracking-[0.25em] uppercase -mt-0.5">Dental Clinic</span>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">
              Odontología especializada con tecnología de vanguardia y calidez humana.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-cyan/20 flex items-center justify-center hover:bg-cyan/10 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-cyan" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-cyan/20 flex items-center justify-center hover:bg-cyan/10 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-cyan" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Servicios</h4>
            <ul className="space-y-2">
              {links.servicios.map((l) => (
                <li key={l}>
                  <a href="#servicios" className="text-primary-foreground/40 hover:text-cyan text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Clínica</h4>
            <ul className="space-y-2">
              {links.clinica.map((l) => (
                <li key={l}>
                  <a href="#clinica" className="text-primary-foreground/40 hover:text-cyan text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">Horario de atención</h4>
            <div className="text-primary-foreground/40 text-sm space-y-1.5">
              <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 1:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2 text-primary-foreground/80">Emergencias</h4>
              <a href="tel:+18095551234" className="text-cyan text-sm font-medium">+1 (809) 555-1234</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Luján Dental Clinic. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {links.legal.map((l) => (
              <a key={l} href="#" className="text-primary-foreground/30 hover:text-cyan text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
