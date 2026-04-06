import { Clock, Wifi, Car, Users, Coffee, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroFacilities from "@/assets/hero-facilities.jpg";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import gardenImg from "@/assets/hotel-garden.jpg";
import restaurantImg from "@/assets/hotel-restaurant.jpg";
import facadeImg from "@/assets/hotel-facade.jpg";

const facilities = [
  { icon: Clock, title: "24-Hour Reception", desc: "Our dedicated team is available around the clock for check-in, check-out, and any assistance you may need.", img: lobbyImg },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected with complimentary high-speed WiFi available in all public areas and rooms.", img: facadeImg },
  { icon: Car, title: "Secure Parking", desc: "Spacious and monitored parking area for your vehicles, ensuring complete peace of mind.", img: gardenImg },
  { icon: Users, title: "Family Entertainment", desc: "Enjoy a variety of entertainment facilities designed for guests of all ages.", img: restaurantImg },
];

const services = [
  { icon: Coffee, title: "Room Service" },
  { icon: ShieldCheck, title: "24/7 Security" },
  { icon: Sparkles, title: "Daily Housekeeping" },
  { icon: Utensils, title: "Dining Options" },
];

const Facilities = () => (
  <Layout>
    <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroFacilities} alt="Facilities & Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Experience</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Facilities & Services</h1>
        <div className="gold-line w-16 mx-auto mb-6" />
        <p className="font-body text-primary-foreground/60 max-w-lg mx-auto">
          Everything you need for a perfect stay, thoughtfully designed for your comfort.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 space-y-24">
        {facilities.map((f, i) => (
          <AnimatedSection key={f.title}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-sm">
                  <img src={f.img} alt={f.title} loading="lazy" width={1280} height={720}
                    className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <f.icon size={28} className="text-gold" />
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">{f.title}</h2>
                <div className="gold-line w-12 mb-6" />
                <p className="font-body text-muted-foreground leading-relaxed text-lg">{f.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <section className="py-20 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
          <div className="gold-line w-16 mx-auto" />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title }, i) => (
            <AnimatedSection key={title} delay={i * 0.1} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold/20 flex items-center justify-center">
                <Icon size={24} className="text-gold" />
              </div>
              <p className="font-body text-sm tracking-wide">{title}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Facilities;
