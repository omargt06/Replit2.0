import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", to: "hero" },
    { name: "Quiénes Somos", to: "about" },
    { name: "Servicios", to: "services" },
    { name: "Consejos", to: "tips" },
    { name: "Contacto", to: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg leading-tight",
                isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
              )}>
                Hnos. Cantueño
              </span>
              <span className={cn(
                "text-xs font-medium tracking-wider uppercase",
                isScrolled ? "text-slate-500" : "text-slate-500 lg:text-slate-200"
              )}>
                Fontaneros Valencia
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={cn(
                  "text-sm font-medium cursor-pointer transition-colors hover:text-primary",
                  isScrolled ? "text-slate-600" : "text-slate-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <a href="tel:+34662681060">
              <Button 
                variant={isScrolled ? "default" : "secondary"}
                className={cn(
                  "gap-2 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all",
                  !isScrolled && "bg-white text-primary hover:bg-white/90"
                )}
              >
                <Phone className="w-4 h-4" />
                662 681 060
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 lg:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-lg font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+34662681060" className="mt-4 block">
              <Button className="w-full gap-2 font-bold bg-primary text-white">
                <Phone className="w-4 h-4" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
