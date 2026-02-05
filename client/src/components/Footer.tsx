import { Droplets, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-scroll";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Droplets className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">Hnos. Cantueño</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Servicios profesionales de fontanería en Valencia. 
              Calidad, rapidez y garantía en cada trabajo que realizamos.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a href="tel:+34662681060" className="hover:text-white transition-colors">
                  +34 662 681 060
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>
                  Carrer d'Amadeu de Savoia, 6,<br />
                  El Pla del Real, 46010<br />
                  València, Valencia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Abierto 24 Horas / 7 días</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Enlaces</h3>
            <ul className="space-y-2">
              {["Inicio", "Quienes Somos", "Servicios", "Consejos", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Inicio" ? "hero" : item === "Quienes Somos" ? "about" : item.toLowerCase()}
                    smooth={true}
                    className="hover:text-primary transition-colors cursor-pointer block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Ubicación</h3>
            <div className="rounded-lg overflow-hidden h-40 bg-slate-800 border border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.6253909794354!2d-0.3639969234479383!3d39.47775951226768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60489069695d85%3A0xe5a3c89280145c3!2sCarrer%20d&#39;Amadeu%20de%20Savoia%2C%206%2C%20El%20Pla%20del%20Real%2C%2046010%20Val%C3%A8ncia%2C%20Valencia!5e0!3m2!1sen!2ses!4v1709664585321!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Fontaneros Valencia Hnos Cantueño. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
