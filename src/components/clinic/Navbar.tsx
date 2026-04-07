import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Clínica", href: "#clinica" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Smile Journey", href: "#smile-journey" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan to-cyan-light flex items-center justify-center">
            <span className="font-display text-navy-deep font-bold text-sm">L</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-primary-foreground font-semibold text-lg tracking-tight">Luján</span>
            <span className="text-cyan text-[10px] tracking-[0.25em] uppercase font-medium -mt-0.5">Dental Clinic</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/70 hover:text-cyan text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18095551234" className="text-primary-foreground/70 hover:text-cyan transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <a href="#contacto" className="btn-primary-clinic text-sm !px-5 !py-2.5">
            Agendar cita
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground/80"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-cyan/10 mt-2">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-cyan text-base font-medium transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary-clinic mt-2 text-center">
              Agendar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
