import { useState } from "react";
import { Instagram, Share2, X } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import gardenImg from "@/assets/hotel-garden.jpg";
import restaurantImg from "@/assets/hotel-restaurant.jpg";
import facadeImg from "@/assets/hotel-facade.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomDouble from "@/assets/room-double.jpg";

const galleryItems = [
  { img: facadeImg, caption: "Grand Entrance", tag: "Exterior" },
  { img: lobbyImg, caption: "Elegant Lobby", tag: "Interior" },
  { img: roomDeluxe, caption: "Deluxe Suite", tag: "Rooms" },
  { img: gardenImg, caption: "Garden Pathway", tag: "Outdoor" },
  { img: restaurantImg, caption: "Fine Dining", tag: "Restaurant" },
  { img: roomSuperior, caption: "Mountain View Room", tag: "Rooms" },
  { img: roomFamily, caption: "Family Suite", tag: "Rooms" },
  { img: roomTwin, caption: "Twin Room", tag: "Rooms" },
  { img: roomDouble, caption: "Double Deluxe", tag: "Rooms" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Instagramable</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-primary-foreground/60 max-w-lg mx-auto">
            Every corner is a photo opportunity. Discover our most picture-perfect spots.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 0.1}>
                <div
                  className="group relative overflow-hidden rounded-sm cursor-pointer break-inside-avoid"
                  onClick={() => setLightbox(i)}
                >
                  <img src={item.img} alt={item.caption} loading="lazy" width={1024} height={768}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96"}`} />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500 flex items-end">
                    <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full">
                      <span className="text-xs font-body tracking-wider text-gold uppercase">{item.tag}</span>
                      <h3 className="font-heading text-lg text-primary-foreground">{item.caption}</h3>
                      <div className="flex gap-3 mt-3">
                        <button className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/80 hover:text-gold hover:border-gold transition-colors">
                          <Instagram size={14} />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/80 hover:text-gold hover:border-gold transition-colors">
                          <Share2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={galleryItems[lightbox].img} alt={galleryItems[lightbox].caption}
            className="max-w-full max-h-[85vh] object-contain rounded-sm" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-8 text-center">
            <p className="text-xs font-body tracking-wider text-gold uppercase">{galleryItems[lightbox].tag}</p>
            <p className="font-heading text-xl text-primary-foreground">{galleryItems[lightbox].caption}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
