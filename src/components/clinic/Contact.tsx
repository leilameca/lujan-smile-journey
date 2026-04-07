import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Clock, Send, Mail } from "lucide-react";

const locations = [
  {
    city: "Santiago",
    address: "Av. Winston Churchill, Torre Empresarial, Piso 4",
    phone: "+1 (809) 555-1234",
    hours: "Lun - Vie: 8:00 AM - 6:00 PM · Sáb: 9:00 AM - 1:00 PM",
  },
  {
    city: "Mao",
    address: "Calle Duarte #45, Centro Médico Luján",
    phone: "+1 (809) 555-5678",
    hours: "Lun - Vie: 8:00 AM - 5:00 PM · Sáb: 9:00 AM - 12:00 PM",
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.name}. ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
    window.open(`https://wa.me/18095551234?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contacto" className="section-padding bg-secondary/50">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Contáctanos</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Agenda tu <span className="italic">cita</span>
          </h2>
          <p className="text-muted-foreground">
            Da el primer paso hacia tu mejor sonrisa. Estamos aquí para atenderte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-foreground text-sm font-medium mb-1.5 block">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-foreground text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-foreground text-sm font-medium mb-1.5 block">Teléfono</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all"
                    placeholder="+1 (809) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="text-foreground text-sm font-medium mb-1.5 block">¿En qué podemos ayudarte?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu caso o el tratamiento que te interesa..."
                />
              </div>
              <button type="submit" className="btn-primary-clinic w-full">
                <Send className="w-4 h-4" /> Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.city} className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Sede {loc.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan flex-shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-foreground text-sm font-medium hover:text-cyan transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Email directo</h3>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan flex-shrink-0" />
                <a href="mailto:info@lujandentalclinic.com" className="text-foreground text-sm font-medium hover:text-cyan transition-colors">
                  info@lujandentalclinic.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
