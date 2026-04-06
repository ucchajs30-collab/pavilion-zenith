import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-sm font-body tracking-[0.3em] text-gold uppercase mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-primary-foreground/60 max-w-lg mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or anything else.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <div className="gold-line w-12 mb-8" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                  <input type="email" placeholder="Email Address" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                  <input type="text" placeholder="Subject" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
                </div>
                <textarea placeholder="Your Message" rows={5} required value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
                <button type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wider text-sm rounded-sm hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="gold-line w-12 mb-8" />
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "Jl. Example Street No. 123, City, Country" },
                  { icon: Phone, label: "Phone", value: "+62 123 456 7890" },
                  { icon: Mail, label: "Email", value: "info@mandarinpavilion.com" },
                  { icon: Clock, label: "Reception", value: "24 Hours, 7 Days a Week" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">{label}</p>
                      <p className="font-body text-foreground font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3 mb-10">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                  { icon: MapPin, label: "Google Maps" },
                ].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Hotel Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
