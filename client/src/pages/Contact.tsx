import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitMutation = trpc.contact.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await submitMutation.mutateAsync(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-secondary">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
            ELSMITH
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition">Home</Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">About</Link>
            <Link href="/services" className="text-foreground hover:text-accent transition">Services</Link>
            <Link href="/programs" className="text-foreground hover:text-accent transition">Programs</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition font-bold">Contact</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Speak to Us Today
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We'd love to hear from you. Contact us today to discuss how ELSMITH can help your organization achieve its goals.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>

              {/* Lagos Office */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Lagos, Nigeria
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Lagos Office<br />
                      Nigeria
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <a href="tel:+2348032004575" className="text-accent hover:underline">
                      +234 803 200 4575
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <a href="mailto:engage@elsmithconsulting.com" className="text-accent hover:underline">
                      engage@elsmithconsulting.com
                    </a>
                  </div>
                </div>
              </div>

              {/* London Office */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  London, United Kingdom
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      London Office<br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <a href="tel:+447733717516" className="text-accent hover:underline">
                      +44 7733 717516
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <a href="mailto:engage@elsmithconsulting.com" className="text-accent hover:underline">
                      engage@elsmithconsulting.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Dubai Office */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Dubai, UAE
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      Dubai Office<br />
                      United Arab Emirates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <a href="mailto:engage@elsmithconsulting.com" className="text-accent hover:underline">
                      engage@elsmithconsulting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary/10 border border-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary/10 py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Find Us on the Map
          </h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6701088509!2d3.3711!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae5ceced3%3A0x6622df46db100fde!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to discuss your organization's unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-blue-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">ELSMITH</h4>
              <p className="text-blue-100">Global Business and Workforce Advisory</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Navigation</h5>
              <ul className="space-y-2 text-blue-100">
                <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
                <li><Link href="/services" className="hover:text-accent transition">Services</Link></li>
                <li><Link href="/programs" className="hover:text-accent transition">Programs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-blue-100">
                <li>Email: <a href="mailto:engage@elsmithconsulting.com" className="hover:text-accent transition">engage@elsmithconsulting.com</a></li>
                <li>Phone: <a href="tel:+2348032004575" className="hover:text-accent transition">+234 803 200 4575</a></li>
                <li><a href="tel:+447733717516" className="hover:text-accent transition">+44 7733 717516</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="text-blue-100 hover:text-accent transition">LinkedIn</a>
                <a href="#" className="text-blue-100 hover:text-accent transition">Instagram</a>
                <a href="#" className="text-blue-100 hover:text-accent transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>&copy; 2025 ELSMITH Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
