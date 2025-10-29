import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { ChevronRight, Briefcase, Users, Award, TrendingUp, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Business & Workforce Advisory",
      icon: Briefcase,
      description: "Strategic guidance on organizational structure, workforce optimization, and business transformation.",
      points: [
        "Organizational design and restructuring",
        "Workforce planning and optimization",
        "Business strategy development",
        "Change management consulting"
      ]
    },
    {
      title: "Executive Search & Workforce Outsourcing",
      icon: Users,
      description: "Specialized recruitment and workforce outsourcing solutions for senior leadership positions.",
      points: [
        "Executive recruitment and placement",
        "Workforce outsourcing solutions",
        "Talent acquisition strategies",
        "Recruitment process optimization"
      ]
    },
    {
      title: "High-Impact Learning & Leadership Development",
      icon: Award,
      description: "High-impact learning programs designed to develop exceptional leaders and drive organizational culture.",
      points: [
        "Leadership development programs",
        "Executive coaching and mentoring",
        "Organizational learning strategies",
        "Talent capability building"
      ]
    },
    {
      title: "Talent Management & Succession Planning",
      icon: TrendingUp,
      description: "Comprehensive talent strategies and succession frameworks to ensure organizational continuity.",
      points: [
        "Succession planning frameworks",
        "Talent management strategies",
        "High-potential identification and development",
        "Retention and engagement programs"
      ]
    },
    {
      title: "Business Transformation & Process Re-engineering",
      icon: Zap,
      description: "End-to-end process optimization and digital transformation to enhance operational excellence.",
      points: [
        "Business process reengineering",
        "Digital transformation consulting",
        "Operational efficiency improvement",
        "Technology adoption strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-secondary">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="ELSMITH Consulting" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition">Home</Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">About</Link>
            <Link href="/services" className="text-foreground hover:text-accent transition font-bold">Services</Link>
            <Link href="/programs" className="text-foreground hover:text-accent transition">Programs</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition">Contact</Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Speak to Us Today
              </Button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 md:py-28">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive advisory solutions tailored to drive organizational success and sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="border border-secondary rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                    <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-8">
                      <Icon className="w-20 h-20 text-accent" />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.points.map((point, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-accent mr-3 font-bold">✓</span>
                            <span className="text-foreground">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">
            Why Choose ELSMITH
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-secondary">
              <h3 className="text-xl font-bold text-primary mb-4">
                Proven Expertise
              </h3>
              <p className="text-foreground">
                Over two decades of experience transforming organizations across Africa, Europe, and the Middle East.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-secondary">
              <h3 className="text-xl font-bold text-primary mb-4">
                Global Perspective
              </h3>
              <p className="text-foreground">
                Deep understanding of diverse markets and cultures with offices in Lagos, London, and Dubai.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-secondary">
              <h3 className="text-xl font-bold text-primary mb-4">
                Results-Driven Approach
              </h3>
              <p className="text-foreground">
                Focused on delivering measurable outcomes and sustainable value for our clients.
              </p>
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
            Connect with our team of expert consultants to discuss how we can help drive your organization's growth.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
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
