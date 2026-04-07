interface PageHeroProps {
  image: string;
  subtitle: string;
  title: string;
  description?: string;
}

const PageHero = ({ image, subtitle, title, description }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/70" />
    </div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">{subtitle}</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">{title}</h1>
      <div className="gold-line w-16 mx-auto mb-6" />
      {description && (
        <p className="font-body text-primary-foreground/60 max-w-lg mx-auto">{description}</p>
      )}
    </div>
  </section>
);

export default PageHero;
