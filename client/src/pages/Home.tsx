import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Wrench, 
  Droplets, 
  Search, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import sinkImgPath from "@assets/Screenshot_2026-02-05_172157_1770360978273.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        {/* Hero Image Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Professional plumber working on pipes */}
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
            alt="Fontanero profesional"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-8"
            >

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
                Fontaneros <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Expertos
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                Servicios de fontanería de alta calidad para hogares y negocios. 
                Soluciones rápidas, duraderas y garantizadas por Hnos. Cantueño.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+34662681060" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-primary hover:bg-blue-600 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </Button>
                </a>
                <ScrollLink to="contact" smooth={true} offset={-80} duration={800} className="w-full sm:w-auto cursor-pointer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                    Solicitar Cita
                  </Button>
                </ScrollLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Solicita tu presupuesto</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105 z-0" />
              {/* Unsplash: Plumber team or tools */}
              <img 
                src={sinkImgPath}
                alt="Nuestro equipo" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <p className="font-display font-bold text-xl text-slate-900 mb-2">"Profesionalidad y Rapidez"</p>
                <div className="flex text-yellow-400 gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary font-semibold text-sm tracking-wide uppercase">
                Sobre Nosotros
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Expertos en soluciones de fontanería
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                En Hnos. Cantueño Fontaneros Valencia, nos dedicamos a ofrecer servicios de alta calidad para cubrir las necesidades de hogares y negocios en Valencia y sus alrededores.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nuestro equipo está especializado en reparación de fugas, desatascos, instalaciones y mantenimiento. Utilizamos tecnología avanzada para garantizar resultados precisos sin obras innecesarias.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Atención Personalizada",
                  "Presupuestos Claros",
                  "Tecnología Moderna",
                  "Sin Sorpresas"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Nuestros Servicios</h2>
            <p className="text-lg text-slate-600">
              Ofrecemos una gama completa de servicios de fontanería para resolver cualquier problema, grande o pequeño.
            </p>
          </div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ServiceCard 
              icon={<Droplets className="w-6 h-6" />}
              title="Desatascos Urgentes"
              description="Servicio especializado para hogares y comunidades. Eliminamos obstrucciones en tuberías, desagües y alcantarillado con maquinaria de alta presión."
            />
            <ServiceCard 
              icon={<Wrench className="w-6 h-6" />}
              title="Reparación de Cisternas"
              description="Mantenimiento integral, limpieza y reparación de mecanismos. Garantizamos un funcionamiento eficiente para evitar pérdidas de agua innecesarias."
            />
            <ServiceCard 
              icon={<Search className="w-6 h-6" />}
              title="Detección de Fugas"
              description="Localizamos fugas ocultas utilizando tecnología acústica y térmica avanzada. Reparamos el problema minimizando obras y daños estéticos."
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Opiniones de Nuestros Clientes</h2>
            <p className="text-lg text-slate-600">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-yellow-400 gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6">
                "Totalmente impresionado con su trabajo. Superaron todas mis expectativas. ¡Los recomiendo sin dudar!"
              </p>
              <div>
                <p className="font-bold text-slate-900">Deacon st</p>
                <p className="text-sm text-slate-500">Hace un año</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-yellow-400 gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6">
                "El equipo de Hnos Cantueño me dejó impresionado por su profesionalismo y rapidez. ¡Volveré a llamarlos sin dudarlo!"
              </p>
              <div>
                <p className="font-bold text-slate-900">Mauricio Rogeli</p>
                <p className="text-sm text-slate-500">Hace 11 meses</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-yellow-400 gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6">
                "Los mejores en el negocio, respondieron a mi llamada y llegaron rápidamente. ¡Estoy muy agradecido! 🙏"
              </p>
              <div>
                <p className="font-bold text-slate-900">Esmeraldo Fabian</p>
                <p className="text-sm text-slate-500">Hace un año</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Tienes una urgencia de fontanería?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte en cualquier momento. No dejes que un pequeño problema se convierta en uno grande.
          </p>
          <a href="tel:+34662681060">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg h-14 px-10 shadow-xl font-bold">
              <PhoneCall className="mr-2 h-5 w-5" />
              Llamar al 662 681 060
            </Button>
          </a>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Consejos y Recomendaciones</h2>
              <p className="text-lg text-slate-600 mb-8">
                Mantener tu instalación en buen estado es clave para evitar averías costosas. Aquí te dejamos algunos consejos de nuestros expertos.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-slate-900">
                    Cómo Encontrar el Mejor Servicio
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-2 pt-2">
                      <li><strong>Investiga y Compara:</strong> Busca opiniones reales de otros clientes.</li>
                      <li><strong>Verifica Credenciales:</strong> Asegúrate de que sean profesionales certificados.</li>
                      <li><strong>Pide Presupuesto:</strong> Un buen profesional siempre te dará un precio estimado claro antes de empezar.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-slate-900">
                    Importancia del Mantenimiento Preventivo
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-2 pt-2">
                      <li><strong>Ahorro Económico:</strong> Reparar una pequeña fuga a tiempo es mucho más barato que una inundación.</li>
                      <li><strong>Eficiencia:</strong> Grifos y cisternas en buen estado ahorran litros de agua al año.</li>
                      <li><strong>Durabilidad:</strong> El mantenimiento alarga la vida útil de tus instalaciones.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-slate-900">
                    Señales de Alerta en tu Hogar
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    Si notas bajadas de presión, manchas de humedad en paredes, olores desagradables en desagües o ruidos extraños en las tuberías, llámanos inmediatamente. Son síntomas de problemas que pueden agravarse rápidamente.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden">
               {/* Decorative background icon */}
               <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-200/50 rotate-12" />
               
               <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">¿Por qué elegirnos?</h3>
               <div className="space-y-6 relative z-10">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <Clock className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Rapidez de Respuesta</h4>
                     <p className="text-slate-600 text-sm mt-1">Llegamos en tiempo récord para urgencias en Valencia capital.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Garantía Total</h4>
                     <p className="text-slate-600 text-sm mt-1">Todos nuestros trabajos cuentan con garantía por escrito.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <Droplets className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Materiales de Primera</h4>
                     <p className="text-slate-600 text-sm mt-1">Solo trabajamos con marcas reconocidas y recambios originales.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Contáctanos</h2>
                <p className="text-slate-600 mb-8">Rellena el formulario y te responderemos a la brevedad.</p>
                <ContactForm />
              </div>
              <div className="bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-200">Información Directa</h3>
                    <p className="text-slate-300 mb-6">
                      Si es una urgencia, te recomendamos llamar directamente a nuestro teléfono disponible 24h.
                    </p>
                    <a href="tel:+34662681060" className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                      <PhoneCall className="w-6 h-6" />
                      662 681 060
                    </a>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Horario</p>
                        <p className="text-slate-300 text-sm">Abierto 24 horas, los 365 días del año.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Compromiso</p>
                        <p className="text-slate-300 text-sm">Presupuesto sin compromiso y desplazamiento gratuito si aceptas la reparación.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 shadow-2xl lg:hidden z-40 flex gap-3">
        <a href="tel:+34662681060" className="flex-1">
          <Button className="w-full h-12 text-lg font-bold shadow-lg bg-primary hover:bg-blue-600">
            <PhoneCall className="w-5 h-5 mr-2" />
            Llamar
          </Button>
        </a>
        <a href="https://wa.me/34662681060" className="flex-none">
          <Button variant="outline" className="h-12 w-12 p-0 border-green-500 text-green-600 bg-green-50 hover:bg-green-100">
             {/* WhatsApp Icon placeholder since it's not in Lucide regular set, using MessageCircle instead */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </Button>
        </a>
      </div>
      
      <Footer />
    </div>
  );
}
