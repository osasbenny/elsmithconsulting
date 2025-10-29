import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white border-b border-secondary shadow-lg z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-foreground hover:text-accent transition py-2 block"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-foreground hover:text-accent transition py-2 block"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="text-foreground hover:text-accent transition py-2 block"
          >
            Services
          </Link>
          <Link
            href="/programs"
            onClick={closeMenu}
            className="text-foreground hover:text-accent transition py-2 block"
          >
            Programs
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-foreground hover:text-accent transition py-2 block"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
