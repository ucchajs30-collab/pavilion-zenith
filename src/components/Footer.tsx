import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground/70">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">MANDARIN</h3>
          <p className="text-xs tracking-[0.3em] text-gold font-body uppercase mb-6">Pavilion Hotel</p>
          <p className="text-sm leading-relaxed font-body">
            The perfect family escape. Modern comfort meets unforgettable moments.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">Quick Links</h4>
          <div className="gold-line w-12 mb-4" />
          <nav className="flex flex-col gap-2">
            {[
              { to: "/rooms", label: "Rooms & Suites" },
              { to: "/facilities", label: "Facilities" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-body hover:text-gold transition-colors">{l.label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">Contact</h4>
          <div className="gold-line w-12 mb-4" />
          <div className="flex flex-col gap-3 text-sm font-body">
            <div className="flex items-start gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /><span>Jl. Example Street No. 123, City</span></div>
            <div className="flex items-center gap-2"><Phone size={16} className="text-gold shrink-0" /><span>+62 123 456 7890</span></div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-gold shrink-0" /><span>info@mandarinpavilion.com</span></div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">Follow Us</h4>
          <div className="gold-line w-12 mb-4" />
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label}
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Maps"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="gold-line mt-12 mb-8" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body">
        <p>&copy; 2026 Mandarin Pavilion Hotel. All rights reserved.</p>
        <p className="text-gold">Family Escape • Modern Comfort • Unforgettable Moments</p>
      </div>
    </div>
  </footer>
);

export default Footer;
