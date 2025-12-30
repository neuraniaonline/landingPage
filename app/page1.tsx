'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Menu, X, Sparkles, Target, Clock, DollarSign, Code, Workflow, Bot } from 'lucide-react';

export default function NeuraníaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition"></div>
                <img src="/logo-neurania1.png" alt="NEURANIA" className="w-20 h-20 relative z-10" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  NEURANIA
                </span>
                <p className="text-xs text-slate-400 italic">Soluciones Inteligentes</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Servicios</a>
              <a href="#como-funciona" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Cómo funciona</a>
              <a href="#casos-uso" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Casos de uso</a>
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Agendá una demo
              </button>
            </div>

            <button 
              className="md:hidden text-slate-300 hover:text-cyan-400 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#servicios" className="block text-slate-300">Servicios</a>
              <a href="#como-funciona" className="block text-slate-300">Cómo funciona</a>
              <a href="#casos-uso" className="block text-slate-300">Casos de uso</a>
              <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
                Agendá una demo
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-5 py-2.5 rounded-full border border-cyan-400/30">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Automatización con IA de última generación
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Potenciá tu negocio con{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Agentes de IA
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed">
                Transformamos tu operación con GPTs personalizados, automatizaciones inteligentes y agentes AI que trabajan 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Agendá una demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  Ver casos de éxito
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">80%</div>
                  <div className="text-sm text-slate-400">Reducción de tiempo</div>
                </div>
                <div className="h-12 w-px bg-slate-700"></div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-slate-400">Disponibilidad</div>
                </div>
                <div className="h-12 w-px bg-slate-700"></div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">3x</div>
                  <div className="text-sm text-slate-400">ROI promedio</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl shadow-2xl p-8 border border-slate-700/50">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300">GPT personalizado respondiendo</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300">Procesando 10k datos/seg</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-purple-600/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300">Optimizando workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Tu equipo pierde tiempo en <span className="text-cyan-400">tareas repetitivas?</span>
            </h2>
            <p className="text-xl text-slate-400">
              Mientras tu competencia automatiza, vos seguís perdiendo horas valiosas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Tiempo perdido</h3>
              <p className="text-slate-400">Horas dedicadas a responder las mismas consultas</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Equipo saturado</h3>
              <p className="text-slate-400">Empleados sobrecargados con tareas administrativas</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-600/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Crecimiento limitado</h3>
              <p className="text-slate-400">Escalabilidad frenada por procesos manuales</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              La solución: <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">NEURANIA</span>
            </h2>
            <p className="text-xl text-slate-400">
              Implementamos IA que se adapta a tu negocio y libera a tu equipo.
            </p>
          </div>

          <div id="servicios" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GPTs Personalizados</h3>
              <p className="text-slate-400 text-sm">Asistentes entrenados con tu información</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automatizaciones</h3>
              <p className="text-slate-400 text-sm">Workflows que eliminan tareas repetitivas</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-600/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Agentes AI</h3>
              <p className="text-slate-400 text-sm">Sistemas autónomos inteligentes 24/7</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integraciones</h3>
              <p className="text-slate-400 text-sm">Conectamos con todas tus herramientas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="casos-uso" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Soluciones para tu <span className="text-cyan-400">industria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Educación</h3>
              <p className="text-slate-400 mb-6">Tutores virtuales, corrección automática y asistentes 24/7.</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Tutor virtual personalizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Material educativo adaptativo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Seguimiento con Machine Learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">PyMEs</h3>
              <p className="text-slate-400 mb-6">Atención automatizada, análisis predictivo y automatización de ventas.</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Chatbot omnicanal 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Pipeline de ventas automatizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Análisis predictivo con BI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Cómo funciona</h2>
            <p className="text-xl text-slate-400">Implementación en 4 pasos</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-7xl font-bold text-cyan-400/10 mb-4">01</div>
              <Users className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Consultá</h3>
              <p className="text-slate-400 text-sm">Agendamos una demo para entender tus necesidades</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-7xl font-bold text-blue-500/10 mb-4">02</div>
              <Brain className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Diseñamos</h3>
              <p className="text-slate-400 text-sm">Creamos la solución perfecta para tu caso</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-600/50 transition-all duration-300">
              <div className="text-7xl font-bold text-purple-600/10 mb-4">03</div>
              <Zap className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Implementamos</h3>
              <p className="text-slate-400 text-sm">Integramos sin fricción en tus sistemas</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-7xl font-bold text-cyan-400/10 mb-4">04</div>
              <TrendingUp className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Optimizamos</h3>
              <p className="text-slate-400 text-sm">Mejora continua basada en resultados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Beneficios que <span className="text-cyan-400">transforman</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-400/50">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Eficiencia máxima</h3>
              <p className="text-slate-400">Reducí hasta 80% el tiempo en tareas repetitivas</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Reducción de costos</h3>
              <p className="text-slate-400">Ahorrá en personal operativo</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-600/50">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Escalabilidad</h3>
              <p className="text-slate-400">Crecé sin límites sin aumentar costos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ¿Listo para <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">automatizar</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Agendá una demo gratuita y descubrí cómo la IA puede transformar tu operación
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <span>Agendá tu demo ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo-neurania.png" alt="NEURANIA" className="w-12 h-12 relative z-10" />
                <span className="text-2xl font-bold">NEURANIA</span>
              </div>
              <p className="text-slate-400 text-sm">
                Soluciones de IA para el futuro
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>GPTs Personalizados</li>
                <li>Automatizaciones</li>
                <li>Agentes AI</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Industrias</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Educación</li>
                <li>PyMEs</li>
                <li>E-commerce</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>info@neurania.com</li>
                <li>Mendoza, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 NEURANIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}