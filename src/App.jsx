import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Download, Check, ArrowRight, Sparkles, Rocket, TrendingUp, Shield, Database, Cpu, Mail, Phone, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const BIYE_URL = 'https://biye-app.vercel.app/';

export default function WoodstackPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'biye', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-purple-500/20 rounded-2xl max-w-md w-full p-8 relative">
        <button 
          onClick={() => setShowContactForm(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contáctanos
        </h3>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Tu nombre" 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="Tu email" 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <input 
            type="tel" 
            placeholder="Teléfono" 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
          />
          <textarea 
            placeholder="Contanos sobre tu proyecto..." 
            rows={4}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
          />
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {showContactForm && <ContactModal />}
      
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Woodstack Inc.
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'biye', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {section === 'biye' ? 'Proyecto' : section === 'home' ? 'Inicio' : section === 'pricing' ? 'Precios' : 'Contacto'}
                </button>
              ))}
              <a 
                href="https://www.linkedin.com/in/martin-undefined-b97604241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Hablemos
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              {['home', 'biye', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-slate-300 hover:text-purple-400 transition-colors"
                >
                  {section === 'biye' ? 'Proyecto' : section === 'home' ? 'Inicio' : section === 'pricing' ? 'Precios' : 'Contacto'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm text-slate-300">Desarrollo de software a medida</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
              Transformamos ideas en
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                plataformas digitales
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
              Desarrollamos soluciones full-stack con tecnologías modernas para empresas que buscan escalar en el mundo digital
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* CAMBIO: botón "Ver Proyecto" ahora abre Biye en nueva pestaña */}
              <a
                href={BIYE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Ver Proyecto</span>
                <ExternalLink size={20} />
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Agendar Reunión
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Rocket, label: '3 años', desc: 'de experiencia' },
              { icon: TrendingUp, label: '100%', desc: 'de satisfacción' },
              { icon: Shield, label: 'Full-Stack', desc: 'MERN + React' }
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.label}
                  </div>
                  <div className="text-slate-400">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ¿Qué hacemos?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'E-commerce a Medida',
                desc: 'Plataformas completas con integración de pagos, gestión de stock y panel administrativo',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Database,
                title: 'Desarrollo Full-Stack',
                desc: 'Aplicaciones web robustas con Node.js, React, MongoDB y arquitectura escalable',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Consultoría Técnica',
                desc: 'Asesoramiento en arquitectura, optimización de performance y mejores prácticas',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={i}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="biye" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm text-slate-300">Proyecto Destacado</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Biye E-Commerce Platform
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Plataforma completa de comercio electrónico con integración nativa de Mercado Pago y arquitectura escalable
            </p>
          </div>

          {/* CAMBIO: el mock ahora es un enlace clicable a Biye */}
          <a
            href={BIYE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block group mb-16"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-slate-800 group-hover:border-cyan-500/50 rounded-3xl p-12 backdrop-blur-sm transition-all duration-300">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 mx-4 bg-slate-800 rounded-md px-4 py-1.5 text-xs text-slate-400 font-mono flex items-center space-x-2 border border-slate-700">
                    <span className="text-green-400">🔒</span>
                    <span>biye-app.vercel.app</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg border border-slate-700 flex items-center justify-center">
                    <Cpu size={64} className="text-purple-400/50" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-slate-700 rounded"></div>
                    <div className="h-20 bg-slate-700 rounded"></div>
                    <div className="h-20 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-400 text-sm mt-4 group-hover:text-cyan-400 transition-colors flex items-center justify-center space-x-2">
                <ExternalLink size={14} />
                <span>Clic para visitar Biye en vivo</span>
              </p>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">El Problema</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start space-x-2">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span>Plataformas genéricas que no se adaptan al mercado local</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span>Costos mensuales en USD insostenibles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span>Integraciones básicas con Mercado Pago</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span>Dependencia total de developers externos</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">La Solución</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start space-x-2">
                  <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Plataforma diseñada para Latinoamérica</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Licencia perpetua o SaaS flexible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Integración profunda con MP</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Código fuente completo y personalizable</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-12">Características Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '🛒', title: 'Sistema de Órdenes', desc: 'Gestión completa desde carrito hasta entrega' },
              { icon: '💳', title: 'Mercado Pago', desc: 'Integración oficial con webhooks automáticos' },
              { icon: '📦', title: 'Gestión de Stock', desc: 'Control en tiempo real de inventario' },
              { icon: '👥', title: 'Multi-Roles', desc: 'Admin, vendedor, cliente, repartidor' },
              { icon: '⚡', title: 'Cache Redis', desc: 'Respuestas 10x más rápidas' },
              { icon: '📊', title: 'Panel Admin', desc: 'Dashboard con métricas en tiempo real' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Stack Tecnológico</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Node.js 22', desc: 'Backend' },
                { name: 'React', desc: 'Frontend' },
                { name: 'MongoDB 6', desc: 'Database' },
                { name: 'Redis 7', desc: 'Cache' },
                { name: 'Express', desc: 'API REST' },
                { name: 'JWT', desc: 'Auth' },
                { name: 'Docker', desc: 'Deploy' },
                { name: 'Mercado Pago', desc: 'Payments' }
              ].map((tech, i) => (
                <div key={i} className="text-center">
                  <div className="bg-slate-800 rounded-lg p-4 mb-2 hover:bg-slate-700 transition-colors">
                    <div className="font-bold text-purple-400">{tech.name}</div>
                  </div>
                  <div className="text-xs text-slate-500">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-slate-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Roadmap 2026</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: 'Q1', features: 'Notificaciones Push, Chat interno, Emails' },
                { q: 'Q2', features: 'Analytics avanzado, Reportes automáticos' },
                { q: 'Q3', features: 'App móvil nativa, GPS tracking' },
                { q: 'Q4', features: 'Facturación automática, Integración ERP' }
              ].map((quarter, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-6">
                  <div className="text-cyan-400 font-bold mb-2">{quarter.q} 2026</div>
                  <div className="text-slate-300">{quarter.features}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">¿Querés una plataforma así para tu negocio?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* CAMBIO: botón "Visitar Biye" directo al sitio */}
              <a
                href={BIYE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Visitar Biye</span>
                <ExternalLink size={20} />
              </a>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Ver Precios</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Planes y Precios
              </span>
            </h2>
            <p className="text-xl text-slate-400">Elegí la modalidad que mejor se adapte a tu negocio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Compra Única',
                price: 'USD 3,800',
                desc: 'Código fuente completo + Deploy',
                features: ['Código fuente completo', 'Deploy en tu servidor', '45 días soporte', 'Documentación técnica', 'Capacitación 4hs', 'Personalización incluida'],
                highlight: false
              },
              {
                name: 'SaaS Growth',
                price: 'USD 650/mes',
                desc: 'Todo gestionado por nosotros',
                features: ['Hasta 2000 productos', 'Hasta 1000 órdenes/mes', 'Hosting incluido', 'Backups diarios', 'Soporte 24hs', 'Actualizaciones gratis'],
                highlight: true
              },
              {
                name: 'Enterprise',
                price: 'A cotizar',
                desc: 'Solución a medida',
                features: ['Customizaciones profundas', 'Integraciones ERP/CRM', 'SLA personalizado', 'Equipo dedicado', 'Soporte prioritario', 'Roadmap custom'],
                highlight: false
              }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`rounded-2xl p-8 ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border-2 border-purple-500 scale-105' 
                    : 'bg-slate-900 border border-slate-800'
                } hover:-translate-y-2 transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {plan.price}
                </div>
                <p className="text-slate-400 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-2">
                      <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500'
                      : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  Solicitar Cotización
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Querés ver todos los detalles?</h3>
            <p className="text-slate-400 mb-6">Descargá nuestro documento completo de pricing con comparativa de planes</p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2">
              <Download size={20} />
              <span>Descargar PDF Completo</span>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Empecemos a trabajar juntos
              </span>
            </h2>
            <p className="text-xl text-slate-400">Elegí cómo querés contactarnos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Calendar,
                title: 'Agendar Reunión',
                desc: 'Hablemos de tu proyecto',
                action: 'Agendar',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Download,
                title: 'Descargar PDF',
                desc: 'Información completa',
                action: 'Descargar',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Mail,
                title: 'Formulario',
                desc: 'Escribinos tu consulta',
                action: 'Completar',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                desc: 'Chateá con nosotros',
                action: 'Enviar',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((contact, i) => {
              const IconComponent = contact.icon;
              return (
                <div 
                  key={i}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => i === 2 && setShowContactForm(true)}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{contact.desc}</p>
                  <div className="text-purple-400 font-semibold text-sm flex items-center space-x-1">
                    <span>{contact.action}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-slate-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">O escribinos directamente</h3>
              <p className="text-slate-400">Respondemos en menos de 24 horas</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@woodstack.dev" 
                className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
                <span>contact@woodstack.dev</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/martin-undefined-b97604241/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <span>LinkedIn: Martín Bonilla</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Woodstack Inc.
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Desarrollo de software a medida para empresas que buscan crecer en el mundo digital
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('biye')} className="hover:text-purple-400 transition-colors">
                    Proyecto
                  </button>
                </li>
                <li>
                  {/* CAMBIO: enlace directo a Biye en el footer */}
                  <a
                    href={BIYE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Biye (en vivo)</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="hover:text-purple-400 transition-colors">
                    Precios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Sobre el Fundador</h4>
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-white">Martín Bernardo Bonilla</strong><br />
                Developer Full-Stack con 3 años de experiencia en el desarrollo de soluciones web escalables
              </p>
              <a 
                href="https://www.linkedin.com/in/martin-undefined-b97604241/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm flex items-center space-x-1"
              >
                <span>Ver perfil en LinkedIn</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Woodstack Inc. Todos los derechos reservados.</p>
            <p className="mt-2">Hecho con ❤️ en Argentina para el mundo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
