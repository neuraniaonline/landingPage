'use client'

import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Menu, X, Sparkles, MessageCircle, Target, Clock, DollarSign, Code, Workflow, Bot } from 'lucide-react';

export default function NeuraníaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

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
              <a 
                href="https://wa.me/5492615017060?text=Hola%20NEURANIA,%20quiero%20información" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Hablemos
              </a>
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
              <a 
                href="https://wa.me/5492611234567?text=Hola%20NEURANIA,%20quiero%20información" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                Hablemos
              </a>
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
                <a 
                  href="https://wa.me/5492615017060?text=Hola%20NEURANIA,%20quiero%20un%20diagnóstico%20gratuito%20de%20IA%20para%20mi%20negocio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Hablemos de tu proyecto</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                {/*<button 
                  onClick={() => setVideoOpen(true)}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Ver cómo funciona
                </button>*/}
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
                    <span className="text-slate-300">Análisis de datos en tiempo real</span>
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
          <a 
            href="https://wa.me/5492615017060?text=Hola%20NEURANIA,%20quiero%20un%20diagnóstico%20gratuito" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Hablemos ahora</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Sección Noticias de IA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-5 py-2.5 rounded-full border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Actualidad IA</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Últimas <span className="text-cyan-400">Noticias de IA</span>
            </h2>
            <p className="text-xl text-slate-400">
              Lo más relevante del mundo de la Inteligencia Artificial
            </p>
          </div>

          {/* Grid de Noticias */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Noticia 1 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 hover:scale-105 transition-all duration-500">
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
                <Brain className="w-16 h-16 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full">
                    Tecnología
                  </span>
                  <span className="text-slate-500 text-xs">Hace 2 días</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  Claude 3.5 Sonnet revoluciona el mercado de IA
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  El nuevo modelo de Anthropic supera a GPT-4 en razonamiento complejo y velocidad de respuesta, marcando un antes y después en asistentes de código.
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Noticia 2 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 hover:scale-105 transition-all duration-500">
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
                <TrendingUp className="w-16 h-16 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">
                    Negocios
                  </span>
                  <span className="text-slate-500 text-xs">Hace 5 días</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  El 67% de las PyMEs adoptará agentes AI en 2025
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  Según Gartner, las pequeñas empresas liderarán la automatización con IA para reducir costos operativos hasta un 40% el próximo año.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Noticia 3 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 hover:scale-105 transition-all duration-500">
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
                <Zap className="w-16 h-16 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full">
                    Educación
                  </span>
                  <span className="text-slate-500 text-xs">Hace 1 semana</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  Tutores virtuales con IA mejoran resultados en un 45%
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  Estudio de Stanford revela que estudiantes asistidos por IA personalizada logran mejor retención y comprensión de contenidos complejos.
                </p>
                <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Canal de WhatsApp - DESTACADO */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/20 via-green-700/10 to-slate-900/50 border-2 border-green-500/50 p-8 md:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full mb-4">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">Contenido exclusivo</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  ¿Querés más noticias de IA <span className="text-green-400">todos los días?</span>
                </h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Unite a nuestro canal de WhatsApp y recibí análisis exclusivos, novedades y tips sobre Inteligencia Artificial directamente en tu teléfono.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">Noticias diarias curadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">Análisis y tendencias exclusivas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">Tips prácticos para tu negocio</span>
                  </li>
                </ul>
                
                <a
                  href="https://whatsapp.com/channel/0029VbCNNyBFHWq1Ou971V3c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/50"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Unirme al canal gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent blur-3xl"></div>
                <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Hoy 09:30</div>
                        <div className="text-white font-medium">OpenAI lanza GPT-5 con razonamiento avanzado...</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Ayer 14:20</div>
                        <div className="text-white font-medium">Nuevas regulaciones de IA en la UE...</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Ayer 11:45</div>
                        <div className="text-white font-medium">5 prompts para aumentar productividad...</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>+2.5k suscriptores activos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo-neurania.png" alt="NEURANIA" className="w-8 h-8" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  NEURANIA
                </span>
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
                <li>neuraniaonline@gmail.com</li>
                <li>Mendoza, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 pb-4">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a 
                href="mailto:neuraniaonline@gmail.com"
                className="text-slate-400 hover:text-orange-400 transition-colors flex items-center space-x-2"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm hidden sm:inline">Email</span>
              </a>

              <a 
                href="https://wa.me/5492615017060?text=Hola%20NEURANIA,%20quiero%20información" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-500 transition-colors flex items-center space-x-2"
                aria-label="Canal WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-sm hidden sm:inline">WhatsApp</span>
              </a>

              <a 
                href="https://www.linkedin.com/company/neurania/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-2"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>

              <a 
                href="https://www.instagram.com/neurania.online" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors flex items-center space-x-2"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm hidden sm:inline">Instagram</span>
              </a>

              <a 
                href="https://www.facebook.com/neuraniaonline/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors flex items-center space-x-2"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm hidden sm:inline">Facebook</span>
              </a>

              <a 
                href="https://www.youtube.com/@NeuraniaOnline" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors flex items-center space-x-2"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm hidden sm:inline">YouTube</span>
              </a>

              <a 
                href="https://whatsapp.com/channel/0029VbCNNyBFHWq1Ou971V3c" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-500 transition-colors flex items-center space-x-2"
                aria-label="Canal WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.174L2 22l4.826-1.436A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.48 0-2.873-.356-4.103-1.002l-.295-.155-3.037.904.904-3.037-.155-.295A7.954 7.954 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm-4-9h8v2H8v-2zm0-3h8v2H8V8zm0 6h5v2H8v-2z"/>
                </svg>

                <span className="text-sm hidden sm:inline">Canal IA</span>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 NEURANIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {videoOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>
            
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Cómo funciona NEURANIA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}