import { Bed, Bath, Wind, Tv, Wifi, Clock, Shield, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroAbout from "@/assets/hero-about.jpg";
import facadeImg from "@/assets/hotel-facade.jpg";
import lobbyImg from "@/assets/hotel-lobby.jpg";

const values = [
  { icon: Heart, title: "Family First", desc: "Every facility and service is designed with families in mind." },
  { icon: Clock, title: "24/7 Service", desc: "Round-the-clock reception ready to serve your every need." },
  { icon: Shield, title: "Trust & Safety", desc: "Your security and comfort are our top priorities." },
  { icon: Wifi, title: "Modern Amenities", desc: "Stay connected and comfortable with modern facilities." },
];

const About = () => (
  <Layout>
    <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroAbout} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Our Story</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <div className="gold-line w-16 mx-auto" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <img src={facadeImg} alt="Mandarin Pavilion Hotel" loading="lazy" width={1024} height={768}
                className="w-full rounded-sm shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-sm hidden lg:block" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Perfect <span className="text-gradient-gold">Family Escape</span>
            </h2>
            <div className="gold-line w-12 mb-8" />
            <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-base">
              <p>Mandarin Pavilion Hotel is the perfect place to stay for families on vacation. Enjoy various entertainment facilities for you and your family.</p>
              <p>24-hour reception ready to serve check-in, check-out, and all your needs.</p>
              <p>Free WiFi in all public areas.</p>
              <p>Comfortable and affordable rooms with basic facilities: comfortable beds, private bathroom with toiletries, AC, and TV.</p>
              <p className="font-semibold text-foreground">A smart choice for travelers seeking comfort on a budget.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <div className="gold-line w-16 mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                <Icon size={28} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl mb-3">{title}</h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Full width image */}
    <section className="relative h-80 overflow-hidden">
      <img src={lobbyImg} alt="Hotel Interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
        <AnimatedSection className="text-center">
          <p className="font-heading text-2xl md:text-4xl text-primary-foreground font-bold">Where Comfort Meets Elegance</p>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
