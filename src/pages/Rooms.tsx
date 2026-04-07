import { Link } from "react-router-dom";
import { Bed, Bath, Wind, Tv, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroRooms from "@/assets/hero-rooms.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomDouble from "@/assets/room-double.jpg";

const rooms = [
  { name: "Single Standard", img: roomDouble, price: 65, features: ["Single Bed", "Private Bath", "AC", "TV"] },
  { name: "Ginza Superior Single", img: roomSuperior, price: 85, features: ["Single Bed", "Private Bath", "AC", "TV", "City View"] },
  { name: "Twin Standard", img: roomTwin, price: 80, features: ["Twin Beds", "Private Bath", "AC", "TV"] },
  { name: "Single Deluxe", img: roomDeluxe, price: 95, features: ["King Bed", "Private Bath", "AC", "TV", "Minibar"] },
  { name: "Ginza Deluxe Single", img: roomSuperior, price: 110, features: ["King Bed", "Private Bath", "AC", "TV", "Mountain View"], badge: "Mountain View" },
  { name: "Super Deluxe", img: roomDeluxe, price: 120, features: ["King Bed", "Private Bath", "AC", "TV", "Minibar", "Bathrobe"] },
  { name: "Super Deluxe Twin Bed", img: roomTwin, price: 130, features: ["Twin Beds", "Private Bath", "AC", "TV", "Minibar"] },
  { name: "Twin Deluxe", img: roomTwin, price: 115, features: ["Twin Beds", "Private Bath", "AC", "TV", "Workspace"] },
  { name: "Deluxe Double Room", img: roomDouble, price: 125, features: ["Double Bed", "Private Bath", "AC", "TV", "Minibar"] },
  { name: "Family Room", img: roomFamily, price: 180, features: ["King + Single", "Private Bath", "AC", "TV", "Extra Space"], badge: "Popular" },
  { name: "Ginza Super Deluxe Single", img: roomSuperior, price: 150, features: ["King Bed", "Private Bath", "AC", "TV", "Mountain View", "Lounge"], badge: "Mountain View" },
  { name: "Ginza Super Deluxe Twin", img: roomTwin, price: 160, features: ["Twin Beds", "Private Bath", "AC", "TV", "Mountain View"], badge: "Mountain View" },
  { name: "Ginza Family Twin", img: roomFamily, price: 200, features: ["Twin + Extra", "Private Bath", "AC", "TV", "City View"], badge: "City View" },
  { name: "Ginza Super Family Twin", img: roomFamily, price: 250, features: ["Twin + Extra", "Private Bath", "AC", "TV", "City View", "Lounge"], badge: "Best Value" },
];

const featureIcon = (f: string) => {
  if (f.includes("Bed")) return Bed;
  if (f.includes("Bath")) return Bath;
  if (f.includes("AC")) return Wind;
  if (f.includes("TV")) return Tv;
  if (f.includes("View")) return Eye;
  return Bed;
};

const Rooms = () => (
  <Layout>
    <PageHero
      image={heroRooms}
      subtitle="Accommodations"
      title="Rooms & Suites"
      description="Choose from our carefully curated selection of rooms, each designed for ultimate comfort."
    />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.name} delay={(i % 3) * 0.1}>
              <div className="group bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50">
                <div className="relative overflow-hidden h-56">
                  <img src={room.img} alt={room.name} loading="lazy" width={1024} height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {room.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wider rounded-sm">
                      {room.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{room.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.slice(0, 4).map((f) => {
                      const Icon = featureIcon(f);
                      return (
                        <span key={f} className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground">
                          <Icon size={12} className="text-gold" /> {f}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-xl font-bold text-primary">${room.price}<span className="text-sm font-body text-muted-foreground font-normal">/night</span></span>
                    <Link to="/contact" className="text-sm font-body text-gold hover:text-primary transition-colors flex items-center gap-1">
                      View Details <Eye size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Rooms;
