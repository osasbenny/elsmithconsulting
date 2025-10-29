import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Briefcase, Users, TrendingUp, Award, Zap } from "lucide-react";

export default function Home() {
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
            <Link href="/contact" className="text-foreground hover:text-accent transition">Contact</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Speak to Us Today
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Accelerating Growth. Enabling Excellence.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ELSMITH Consulting is a global business and workforce advisory firm dedicated to transforming organizations through strategic insights, leadership development, and innovative solutions.
            </p>
            <div className="flex gap-4">
              <Link href="/about">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3">
                  About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
                  Get Started <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Highlights */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Our Core Services
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive advisory solutions tailored to drive organizational success and sustainable growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <Briefcase className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Business & Workforce Advisory
              </h3>
              <p className="text-foreground">
                Strategic guidance on organizational structure, workforce optimization, and business transformation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Executive Search & Outsourcing
              </h3>
              <p className="text-foreground">
                Specialized recruitment and workforce outsourcing solutions for senior leadership positions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Leadership Development
              </h3>
              <p className="text-foreground">
                High-impact learning programs designed to develop exceptional leaders and drive organizational culture.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Talent Management & Succession Planning
              </h3>
              <p className="text-foreground">
                Comprehensive talent strategies and succession frameworks to ensure organizational continuity.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Business Transformation & Process Re-engineering
              </h3>
              <p className="text-foreground">
                End-to-end process optimization and digital transformation to enhance operational excellence.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-secondary/30 border border-secondary rounded-lg p-8 hover:shadow-lg transition">
              <Briefcase className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                License to Work™ Programme
              </h3>
              <p className="text-foreground">
                Graduate employability programme designed to bridge the skills gap and prepare talent for the workplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">
            Global Presence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Lagos</h3>
              <p className="text-foreground">Nigeria</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">London</h3>
              <p className="text-foreground">United Kingdom</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Dubai</h3>
              <p className="text-foreground">United Arab Emirates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our team of expert consultants to discuss how we can help drive your organization's growth and success.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
              Speak to Us Today
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
