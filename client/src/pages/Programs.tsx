import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Clock, Users, Target, Award } from "lucide-react";

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-secondary">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-primary hover:text-accent transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ELSMITH
            </a>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-accent transition">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-accent transition">About</a>
            </Link>
            <Link href="/services">
              <a className="text-foreground hover:text-accent transition">Services</a>
            </Link>
            <Link href="/programs">
              <a className="text-foreground hover:text-accent transition font-bold">Programs</a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-accent transition">Contact</a>
            </Link>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Innovative learning and development programs designed to unlock potential and drive organizational success.
          </p>
        </div>
      </section>

      {/* License to Work Programme */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12 min-h-80 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-24 h-24 text-accent mx-auto mb-4" />
                  <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    License to Work™
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  License to Work™ Graduate Employability Programme
                </h2>
                <p className="text-lg text-foreground mb-6">
                  A comprehensive 6-month graduate employability programme designed to bridge the skills gap between academic learning and workplace requirements.
                </p>
                <p className="text-foreground mb-8">
                  This intensive programme equips graduates with practical skills, professional competencies, and industry knowledge needed to succeed in today's competitive job market.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Duration</h4>
                      <p className="text-foreground">6 months of intensive, hands-on training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Target Audience</h4>
                      <p className="text-foreground">Recent graduates and early-career professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Focus Areas</h4>
                      <p className="text-foreground">Professional development, technical skills, and workplace readiness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Outcomes */}
            <div className="bg-secondary/20 rounded-lg p-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Program Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Skills Development
                  </h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Professional communication</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Leadership fundamentals</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Business acumen</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Digital literacy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Career Advancement
                  </h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Job placement support</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Industry connections</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Mentorship opportunities</li>
                    <li className="flex items-start"><span className="text-accent mr-3 font-bold">✓</span> Career coaching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="bg-secondary/10 py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Program Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Module 1: Professional Foundations
              </h3>
              <p className="text-foreground">
                Introduction to workplace culture, professional ethics, and organizational dynamics.
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Module 2: Technical Skills
              </h3>
              <p className="text-foreground">
                Industry-specific technical training and software proficiency development.
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Module 3: Leadership & Communication
              </h3>
              <p className="text-foreground">
                Developing leadership capabilities and effective communication strategies.
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Module 4: Internship & Mentorship
              </h3>
              <p className="text-foreground">
                Practical work experience with industry mentors and career guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the License to Work™ programme and unlock your potential for career success.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
              Learn More <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-blue-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>ELSMITH</h4>
              <p className="text-blue-100">Global Business and Workforce Advisory</p>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Navigation</h5>
              <ul className="space-y-2 text-blue-100">
                <li><Link href="/"><a className="hover:text-accent transition">Home</a></Link></li>
                <li><Link href="/about"><a className="hover:text-accent transition">About</a></Link></li>
                <li><Link href="/services"><a className="hover:text-accent transition">Services</a></Link></li>
                <li><Link href="/programs"><a className="hover:text-accent transition">Programs</a></Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact</h5>
              <ul className="space-y-2 text-blue-100">
                <li>Email: <a href="mailto:engage@elsmithconsulting.com" className="hover:text-accent transition">engage@elsmithconsulting.com</a></li>
                <li>Phone: <a href="tel:+2348032004575" className="hover:text-accent transition">+234 803 200 4575</a></li>
                <li><a href="tel:+447733717516" className="hover:text-accent transition">+44 7733 717516</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us</h5>
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
