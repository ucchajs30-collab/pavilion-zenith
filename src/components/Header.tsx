import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms & Suites" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-primary-foreground drop-shadow-lg">
            MANDARIN
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-gold font-body font-light uppercase">
            Pavilion Hotel
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-300 rounded-sm ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-body font-semibold tracking-wide rounded-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Book Now
          </Link>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary-foreground p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-t border-gold/20 animate-fadeInUp">
          <nav className="flex flex-col py-6 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 text-base font-body tracking-wide transition-colors ${
                  location.pathname === link.to ? "text-gold" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 py-3 bg-primary text-primary-foreground text-center font-body font-semibold tracking-wide rounded-sm"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
