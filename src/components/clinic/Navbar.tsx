import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Clínica", href: "#clinica" },
  { label: "Servicios", href: "#servicios" },
  { label: "Seguros", href: "#seguros" },
  { label: "Equipo", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
  { label: "Ubicación", href: "#ubicacion" },
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
          ? "bg-navy-deep/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-narrow flex items-center justify-between gap-3">
        <a href="#inicio" className="min-w-0 flex flex-1 items-center gap-2.5 md:gap-4">
          <img
            src={logo}
            alt="Lujan Dental Clinic"
            className="h-12 sm:h-14 md:h-20 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[180px] object-contain shrink-0"
          />
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display text-primary-foreground font-semibold text-lg md:text-2xl tracking-tight truncate">
              Luján
            </span>
            <span className="text-cyan text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium -mt-0.5 truncate">
              Dental Clinic
            </span>
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
          <a href="#contacto" className="btn-primary-clinic text-sm !px-5 !py-2.5">
            Agendar cita
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden shrink-0 rounded-full p-2 text-primary-foreground/80 hover:bg-white/10 transition-colors"
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
