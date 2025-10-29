import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function About() {
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
            <Link href="/about" className="text-foreground hover:text-accent transition font-bold">About</Link>
            <Link href="/services" className="text-foreground hover:text-accent transition">Services</Link>
            <Link href="/programs" className="text-foreground hover:text-accent transition">Programs</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition">Contact</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ELSMITH</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A global business and workforce advisory firm committed to transforming organizations through strategic insights, leadership excellence, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To empower organizations and individuals to achieve sustainable growth and excellence through strategic advisory, innovative talent solutions, and transformative leadership development.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be the trusted partner of choice for organizations seeking to navigate complexity, unlock potential, and build thriving, high-performing cultures across the globe.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">•</span> Accountability</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">•</span> Growth</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">•</span> Innovation</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">•</span> Leadership</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">•</span> Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="bg-secondary/20 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-3xl font-bold text-primary mb-4 italic">
              "A Leader is a Dealer in Hope"
            </p>
            <p className="text-xl text-foreground">— Napoleon Bonaparte</p>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">
            Our Leadership
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/10 border border-secondary rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 min-h-64">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">SE</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-2">Stanley Eluwa</h3>
                  <p className="text-lg text-accent font-bold mb-6">Lead Consultant & Founder</p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Stanley Eluwa is the visionary founder and lead consultant at ELSMITH Consulting. With over two decades of experience in business advisory, organizational transformation, and talent development, Stanley has successfully guided numerous organizations across Africa, Europe, and the Middle East through complex transformation journeys.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    His expertise spans business strategy, workforce optimization, executive search, and leadership development. Stanley is passionate about building high-performing teams and creating sustainable organizational cultures that drive long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Global Presence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Lagos, Nigeria</h3>
              <p className="text-blue-100">Our headquarters serving West Africa and beyond with comprehensive advisory solutions.</p>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">London, United Kingdom</h3>
              <p className="text-blue-100">European hub providing strategic consulting and talent solutions to UK and European clients.</p>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Dubai, UAE</h3>
              <p className="text-blue-100">Middle East operations center serving the GCC region with localized expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Discover how ELSMITH can help your organization achieve its strategic objectives and build a thriving culture.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              Get in Touch <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
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
