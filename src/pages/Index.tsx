import { Link } from "react-router-dom";
import { Star, Shield, Wifi, Users, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/hotel-facade.jpg";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomFamily from "@/assets/room-family.jpg";
import gardenImg from "@/assets/hotel-garden.jpg";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: `${2 + Math.random() * 3}px`,
}));

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Mandarin Pavilion Hotel" className="w-full h-full object-cover animate-kenburns" style={{ objectPosition: "center 20%" }} />
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gold/60"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animation: `particle ${p.duration} ${p.delay} infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Gold lines */}
      <div className="absolute top-0 left-1/4 gold-line-vertical h-full opacity-10 animate-pulse-gold" />
      <div className="absolute top-0 left-3/4 gold-line-vertical h-full opacity-10 animate-pulse-gold" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="gold-line w-24 mb-8 opacity-80" />
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-wide mb-4 drop-shadow-2xl"
          style={{ animation: "fadeInUp 1s ease-out forwards", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
          Mandarin Pavilion Hotel
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 tracking-[0.2em] uppercase mb-10 drop-shadow-lg"
          style={{ animation: "fadeInUp 1s 0.3s ease-out forwards", opacity: 0 }}>
          Family Escape • Modern Comfort • Unforgettable Moments
        </p>
        <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "fadeInUp 1s 0.6s ease-out forwards", opacity: 0 }}>
          <Link to="/contact"
            className="px-10 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wider text-sm rounded-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5">
            Book Your Stay
          </Link>
          <Link to="/rooms"
            className="px-10 py-4 border border-gold/60 text-primary-foreground font-body font-semibold tracking-wider text-sm rounded-sm hover:bg-gold/10 transition-all duration-300 hover:border-gold hover:-translate-y-0.5">
            Explore Rooms
          </Link>
        </div>
        <div className="gold-line w-24 mt-10 opacity-80" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 animate-float">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>

    {/* Welcome */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <Sparkles className="mx-auto text-gold mb-6" size={32} />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-gradient-gold">Luxury</span>
          </h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            Mandarin Pavilion Hotel is the perfect place to stay for families on vacation.
            Enjoy modern comfort, world-class hospitality, and create unforgettable moments
            in an atmosphere of refined elegance.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <div className="gold-line w-16 mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Star, title: "Premium Quality", desc: "Every detail crafted for your ultimate comfort and satisfaction." },
            { icon: Shield, title: "Secure & Safe", desc: "24-hour security and secure parking for your peace of mind." },
            { icon: Wifi, title: "Always Connected", desc: "Complimentary high-speed WiFi in all public areas." },
            { icon: Users, title: "Family Friendly", desc: "Entertainment and facilities designed for the whole family." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.15} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                <Icon size={28} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl mb-3">{title}</h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Rooms */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Featured Rooms</h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto">Discover our handpicked selection of premium accommodations.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: roomDeluxe, name: "Super Deluxe", price: "From $120/night" },
            { img: roomSuperior, name: "Ginza Mountain View", price: "From $150/night" },
            { img: roomFamily, name: "Family Room", price: "From $180/night" },
          ].map(({ img, name, price }, i) => (
            <AnimatedSection key={name} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-sm">
                <img src={img} alt={name} loading="lazy" width={1024} height={768}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl text-primary-foreground mb-1">{name}</h3>
                  <p className="font-body text-sm text-gold mb-4">{price}</p>
                  <Link to="/rooms" className="inline-flex items-center gap-2 text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Instagram Teaser */}
    <section className="py-24 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Instagramable</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Capture Every Moment</h2>
            <div className="gold-line w-16 mb-6" />
            <p className="font-body text-primary-foreground/60 leading-relaxed mb-8">
              From our stunning lobby to the lush garden paths, every corner of Mandarin Pavilion Hotel
              is designed to be picture-perfect. Discover spots that will make your social media shine.
            </p>
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3 border border-gold/60 font-body text-sm tracking-wider hover:bg-gold/10 transition-all">
              Explore Gallery <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-4">
            <img src={lobbyImg} alt="Hotel Lobby" loading="lazy" width={640} height={360} className="w-full h-48 object-cover rounded-sm" />
            <img src={gardenImg} alt="Hotel Garden" loading="lazy" width={1024} height={768} className="w-full h-48 object-cover rounded-sm" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={lobbyImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready for an Unforgettable Stay?</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <Link to="/contact"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wider rounded-sm hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/40">
            Reserve Now
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Home;
