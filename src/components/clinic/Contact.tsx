import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Clock, Send, Mail, ExternalLink } from "lucide-react";

const locations = [
  {
    city: "Santiago",
    address: "Av. Winston Churchill, Torre Empresarial, Piso 4",
    phone: "+1 (809) 572-3251",
    hours: "Lun - Vie: 8:00 AM - 6:00 PM · Sáb: 9:00 AM - 1:00 PM",
    mapQuery: "Av. Winston Churchill, Torre Empresarial, Piso 4, Santiago, Republica Dominicana",
    mapUrl: "https://maps.app.goo.gl/PFijF9b233Nv7ggy",
  },
  {
    city: "Mao",
    address: "Calle Duarte #45, Centro Médico Luján",
    phone: "+1 (809) 572-3251",
    hours: "Lun - Vie: 8:00 AM - 5:00 PM · Sáb: 9:00 AM - 12:00 PM",
    mapQuery: "Calle Duarte 45, Centro Medico Lujan, Mao, Republica Dominicana",
    mapUrl: "https://maps.app.goo.gl/JcgzZRsY4CaZw47cA",
  },
];

const getGoogleMapsEmbedUrl = (query: string) => {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
};

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.name}. ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
    window.open(`https://wa.me/18095723251?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="ubicacion" className="section-padding bg-secondary/50">
      <div ref={ref} className={`container-narrow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">Ubicación y contacto</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Visítanos en nuestras <span className="italic">sedes</span>
          </h2>
          <p className="text-muted-foreground">
            Revisa nuestras ubicaciones, explora el mapa interactivo y agenda tu cita desde la sede que te quede más cómoda.
          </p>
        </div>

        <div className="grid xl:grid-cols-[0.82fr_1.18fr] gap-12 items-start">
          <div id="contacto" className="space-y-6 scroll-mt-28">
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

          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.city} className="glass-card rounded-3xl overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Sede {loc.city}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Vista interactiva embebida con Google Maps.
                      </p>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:bg-navy/10"
                    >
                      Abrir mapa
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
                    <div className="rounded-2xl bg-background/70 border border-border/60 p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{loc.address}</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-background/70 border border-border/60 p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-cyan flex-shrink-0" />
                        <a href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`} className="text-foreground text-sm font-medium hover:text-cyan transition-colors">
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{loc.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.35rem] border border-border/60 bg-background/70">
                    <iframe
                      title={`Mapa interactivo de la sede ${loc.city}`}
                      src={getGoogleMapsEmbedUrl(loc.mapQuery)}
                      className="h-[280px] w-full"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
