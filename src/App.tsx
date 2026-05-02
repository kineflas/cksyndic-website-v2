import { Building2, Star, Shield, Users, CheckCircle2, Zap, Sparkles, Droplets, Home, Wrench, ArrowRight, TrendingUp, MapPin, Phone, Mail, Clock, X, Facebook, MessageCircle, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useInView } from './hooks/useInView';
import { useCounter } from './hooks/useCounter';
import { BlogSection } from './components/BlogSection';
import { BlogPage } from './components/BlogPage';
import { ArticlePage } from './components/ArticlePage';
import { GestionAdministrative } from './components/GestionAdministrative';
import { OurStory } from './components/OurStory';

function ContactSection({
  contactForm, setContactForm, isContactSubmitting, contactMessage, handleContactSubmit
}: {
  contactForm: { name: string; email: string; phone: string; message: string };
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string; message: string }>>;
  isContactSubmitting: boolean;
  contactMessage: { type: 'success' | 'error'; text: string } | null;
  handleContactSubmit: (e: React.FormEvent) => Promise<void>;
}) {
  const { ref, isInView } = useInView(0.1);
  const contactItems = [
    { icon: MapPin, title: 'Adresse', content: <><div><strong>Adresse :</strong> 461 Al Massar, bureau N1</div><div>Marrakech 4000, Maroc</div></> },
    { icon: Phone, title: 'Téléphone', content: <p className="text-slate-700">07 14 58 55 57</p> },
    { icon: Mail, title: 'Email', content: <p className="text-slate-700">contact@cksyndic.ma</p> },
    { icon: Clock, title: 'Horaires', content: <><div className="text-slate-700">Lundi - Vendredi: 9h00 - 18h00</div><div className="text-slate-700">Samedi: 9h00 - 13h00</div></> },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-900 mb-4 reveal ${isInView ? 'in-view' : ''}`}>
            Contactez Votre <span className="gradient-text">Syndic</span> à Marrakech
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto reveal delay-150 ${isInView ? 'in-view' : ''}`}>
            Notre équipe de syndic professionnel est à votre disposition pour répondre à toutes vos questions sur la gestion de copropriété
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, title, content }, i) => (
              <div
                key={title}
                className={`card-lift bg-primary-50 rounded-2xl p-8 border border-primary-100 reveal-left ${isInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-xl p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`reveal-right delay-200 ${isInView ? 'in-view' : ''}`}>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Nom complet</label>
                  <input type="text" id="name" required value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input type="email" id="email" required value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-900 mb-2">Téléphone</label>
                  <input type="tel" id="contact-phone" value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+212 6XX XX XX XX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea id="message" required rows={5} value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Décrivez votre besoin..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none" />
                </div>
                {contactMessage && (
                  <div className={`p-4 rounded-xl ${contactMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {contactMessage.text}
                  </div>
                )}
                <button type="submit" disabled={isContactSubmitting}
                  className="btn-shimmer w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary-600/30 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isContactSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onQuoteClick }: { onQuoteClick: () => void }) {
  const { ref, isInView } = useInView(0.2);
  return (
    <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1a3078)' }}>
      <div className="blob w-80 h-80 bg-blue-400/20 -top-10 -right-10 animate-morph" />
      <div className="blob w-64 h-64 bg-primary-400/20 bottom-0 left-0 animate-morph" style={{ animationDelay: '4s' }} />
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 reveal ${isInView ? 'in-view' : ''}`}>
          Prêt à Confier la Gestion de Votre Copropriété à Marrakech ?
        </h2>
        <p className={`text-xl text-blue-100 mb-10 reveal delay-150 ${isInView ? 'in-view' : ''}`}>
          Contactez CK Syndic dès aujourd'hui pour un devis gratuit et personnalisé de gestion de copropriété
        </p>
        <div className={`reveal delay-300 ${isInView ? 'in-view' : ''}`}>
          <button
            onClick={onQuoteClick}
            className="btn-shimmer bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Demander un Devis Gratuit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}


const SERVICES = [
  {
    icon: Building2, title: 'Gestion Administrative', featured: true,
    items: ['Assemblées générales et procès-verbaux', 'Gestion des charges et recouvrement', 'Comptabilité et budgets prévisionnels', 'Suivi des travaux et contrats'],
    link: '/services/gestion-administrative',
  },
  {
    icon: Sparkles, title: 'Ménage & Nettoyage', featured: false,
    items: ['Nettoyage quotidien des parties communes', 'Entretien des halls et escaliers', 'Nettoyage des vitres et façades', 'Service de nettoyage après travaux'],
  },
  {
    icon: Droplets, title: 'Entretien Piscines', featured: false,
    items: ["Traitement et équilibrage de l'eau", 'Nettoyage et aspiration du bassin', 'Maintenance du système de filtration', 'Contrôle mensuel et rapports détaillés'],
  },
  {
    icon: Home, title: 'Jardinage & Espaces Verts', featured: false,
    items: ['Tonte et entretien des pelouses', 'Taille des haies et arbustes', 'Arrosage et fertilisation', 'Plantations saisonnières'],
  },
  {
    icon: Shield, title: 'Sécurité & Gardiennage', featured: false,
    items: ['Service de gardiennage 24/7', "Contrôle d'accès et surveillance", 'Rondes de sécurité régulières', "Gestion des interventions d'urgence"],
  },
  {
    icon: Wrench, title: 'Maintenance Technique', featured: false,
    items: ['Entretien ascenseurs et équipements', 'Plomberie et électricité', 'Climatisation et chauffage', 'Réparations et dépannages rapides'],
  },
];

function ServicesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-900 mb-4 reveal ${isInView ? 'in-view' : ''}`}>
            Nos <span className="gradient-text">Services</span> de Gestion de Copropriété
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto reveal delay-150 ${isInView ? 'in-view' : ''}`}>
            Une gamme complète de services de syndic professionnel pour l'entretien et la gestion de votre résidence à Marrakech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, items, link, featured }, i) => featured ? (
            /* ── Featured card ── */
            <div
              key={title}
              className={`relative overflow-hidden lg:col-span-3 md:col-span-2 rounded-2xl p-8 shadow-2xl reveal ${isInView ? 'in-view' : ''}`}
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #162660 100%)', transitionDelay: '100ms' }}
            >
              {/* background blob */}
              <div className="blob w-72 h-72 bg-blue-400/20 -top-10 -right-10 animate-morph" />
              <div className="relative z-10 md:flex md:items-start md:gap-10">
                <div className="md:flex-1 mb-8 md:mb-0">
                  {/* badge */}
                  <span className="inline-flex items-center gap-1.5 bg-accent-500/20 text-accent-300 border border-accent-500/40 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                    <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                    Service principal
                  </span>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 w-fit">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-blue-200 leading-relaxed mb-6">
                    Le cœur de notre mission : une gestion rigoureuse, transparente et conforme à la loi 18-00 pour que votre résidence soit toujours en ordre.
                  </p>
                  {link && (
                    <Link to={link} className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-full font-bold hover:bg-accent-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg group">
                      <span>Découvrir ce service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
                <div className="md:flex-1">
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            /* ── Regular card ── */
            <div
              key={title}
              className={`card-lift bg-white rounded-2xl p-8 shadow-lg reveal ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              <div className="bg-primary-100 rounded-2xl p-4 w-fit mb-6">
                <Icon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
              <ul className="space-y-3 mb-6">
                {items.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              {link && (
                <Link to={link} className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const { ref, isInView } = useInView(0.1);
  const cards = [
    { icon: Shield, title: 'Transparence Totale', text: 'Accès en ligne 24/7 à tous vos documents, comptes et rapports de copropriété. Une gestion de syndic claire et traçable.' },
    { icon: Users, title: 'Équipe Expérimentée', text: 'Une équipe dynamique et multidisciplinaire, composée de spécialistes en gestion de copropriété, maintenance, sécurité et services résidentiels.' },
    { icon: CheckCircle2, title: 'Conformité Légale', text: 'Respect strict de la loi 18-00 sur la copropriété au Maroc. Gestion conforme et sécurisée.' },
    { icon: Zap, title: 'Réactivité', text: 'Service client disponible du lundi au samedi. Réponse rapide à toutes vos demandes et urgences.' },
  ];

  return (
    <section id="advantages" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-900 mb-4 reveal ${isInView ? 'in-view' : ''}`}>
            Pourquoi Choisir <span className="gradient-text">CK Syndic</span> à Marrakech ?
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto reveal delay-150 ${isInView ? 'in-view' : ''}`}>
            Notre expertise en gestion de copropriété et notre engagement font de CK Syndic le partenaire idéal pour votre résidence à Marrakech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`card-lift bg-slate-50 rounded-2xl p-8 border border-slate-100 reveal ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              <div className="bg-primary-600 rounded-xl p-4 w-fit mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection({ onQuoteClick }: { onQuoteClick: () => void }) {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: counterRef, count } = useCounter(90, 2000, 0);
  const [checksVisible, setChecksVisible] = useState(false);

  useEffect(() => {
    if (heroInView) {
      const t = setTimeout(() => setChecksVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, [heroInView]);

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-primary-200/40 -top-20 -left-20 animate-morph" />
      <div className="blob w-72 h-72 bg-blue-200/30 top-1/2 -right-16 animate-morph" style={{ animationDelay: '3s' }} />

      <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column */}
        <div className="space-y-8">
          <div className={`inline-flex items-center space-x-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full border border-accent-200 reveal ${heroInView ? 'in-view' : ''}`}>
            <Star className="w-4 h-4 fill-accent-600 text-accent-600" />
            <span className="text-sm font-semibold">Syndic professionnel N°1 à Marrakech</span>
          </div>

          <h1 className={`text-5xl lg:text-6xl font-bold text-slate-900 leading-tight reveal delay-100 ${heroInView ? 'in-view' : ''}`}>
            Syndic professionnel à{' '}
            <span className="gradient-text">Marrakech</span>
          </h1>

          <p className={`text-xl text-slate-600 leading-relaxed reveal delay-200 ${heroInView ? 'in-view' : ''}`}>
            CK Syndic prend en charge la gestion complète de votre copropriété à Marrakech avec professionnalisme,
            transparence et réactivité. Un syndic de confiance pour la gestion de votre résidence au Maroc.
          </p>

          <div className={`flex flex-wrap gap-4 reveal delay-300 ${heroInView ? 'in-view' : ''}`}>
            <button
              onClick={onQuoteClick}
              className="btn-shimmer bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-primary-600/30 hover:shadow-2xl hover:shadow-primary-600/40 flex items-center space-x-2"
            >
              <span>Démarrer maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        {/* Right column — dashboard card */}
        <div className={`relative reveal-right delay-200 ${heroInView ? 'in-view' : ''}`}>
          <div className="animate-float-slow bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="animate-pulse-ring bg-primary-600 rounded-xl p-2.5">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">Résidence Al Manar</h2>
                  <p className="text-sm text-slate-600">Marrakech</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                {[
                  { label: 'Charges payées', color: 'green' },
                  { label: 'Piscine entretenue', color: 'primary' },
                  { label: 'Sécurité 24/7', color: 'primary' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`hero-check-item flex items-center justify-between p-4 rounded-xl border ${
                      item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-primary-50 border-primary-200'
                    } ${checksVisible ? 'visible' : ''}`}
                  >
                    <span className="text-slate-800 font-medium">{item.label}</span>
                    <CheckCircle2 className={`w-6 h-6 ${item.color === 'green' ? 'text-green-600' : 'text-primary-600'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl animate-float">
            <div ref={counterRef} className="flex items-center space-x-4">
              <div className="bg-green-100 rounded-xl p-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{count}%</div>
                <div className="text-sm text-slate-600">Recouvrement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return null;
}

function HomePage({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactMessage, setContactMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    setContactMessage(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-request`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          residenceName: `[Contact] ${contactForm.name}`,
          address: contactForm.email,
          phone: contactForm.phone,
          hasAssembly: false,
          message: contactForm.message,
        }),
      });

      if (!response.ok) throw new Error('Failed');

      setContactMessage({ type: 'success', text: 'Votre message a été envoyé avec succès ! Nous vous recontacterons bientôt.' });
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setContactMessage({ type: 'error', text: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = 'CK Syndic Marrakech - Syndic professionnel de copropriété';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'CK Syndic, syndic professionnel à Marrakech. Gestion de copropriété transparente, entretien et sécurité de résidences. Devis gratuit.');
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.cksyndic.ma/');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-primary-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/logock-small.webp"
                srcSet="/logock-small.webp 1x, /logock-medium.webp 2x"
                alt="CK Syndic - Syndic professionnel à Marrakech"
                width="48"
                height="48"
                className="h-12 w-auto brightness-0 saturate-100"
                style={{ filter: 'invert(16%) sepia(98%) saturate(2732%) hue-rotate(215deg) brightness(91%) contrast(92%)' }}
                fetchPriority="high"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#notre-histoire" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">Notre Histoire</a>
              <a href="#services" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">Services</a>
              <a href="#advantages" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">Avantages</a>
              <a href="#blog" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" aria-label="Naviguer vers la section blog">Blog</a>
              <a href="#contact" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
              <button
                onClick={onQuoteClick}
                className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/30"
              >
                Devis Gratuit
              </button>
            </div>
            <button
              className="md:hidden p-2 text-slate-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-100">
              <div className="flex flex-col space-y-1 pt-3">
                <a href="#notre-histoire" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors">Notre Histoire</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors">Services</a>
                <a href="#advantages" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors">Avantages</a>
                <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors">Blog</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors">Contact</a>
                <div className="px-4 pt-2">
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); onQuoteClick(); }}
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/30"
                  >
                    Devis Gratuit
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
      {/* Our Story Section */}
      <OurStory />

      {/* Hero Section */}
      <HeroSection onQuoteClick={onQuoteClick} />

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Services Section */}
      <ServicesSection />


      {/* Contact Section */}
      <ContactSection
        contactForm={contactForm}
        setContactForm={setContactForm}
        isContactSubmitting={isContactSubmitting}
        contactMessage={contactMessage}
        handleContactSubmit={handleContactSubmit}
      />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection onQuoteClick={onQuoteClick} />
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212714585557?text=Bonjour%2C%20je%20vous%20contacte%20pour%20avoir%20plus%20d%27informations%20sur%20vos%20prestations%20de%20Syndic"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contactez-nous sur WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-600 rounded-xl p-2.5">
                  <Building2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-white">CK Syndic</span>
              </div>
              <p className="text-slate-100 leading-relaxed">
                CK Syndic, votre syndic professionnel à Marrakech. Gestion de copropriété transparente et services de qualité pour votre résidence au Maroc.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-slate-100 hover:text-white transition-colors">Gestion Administrative</a></li>
                <li><a href="#services" className="text-slate-100 hover:text-white transition-colors">Entretien & Maintenance</a></li>
                <li><a href="#services" className="text-slate-100 hover:text-white transition-colors">Sécurité</a></li>
                <li><Link to="/blog" className="text-slate-100 hover:text-white transition-colors" aria-label="Voir tous les articles du blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-100">
                    <div><strong>Adresse :</strong> 461 Al Massar, bureau N1</div>
                    <div>Marrakech 4000, Maroc</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="tel:+212714585557" className="text-slate-100 hover:text-white transition-colors">+212 7 14 58 55 57</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="mailto:contact@cksyndic.ma" className="text-slate-100 hover:text-white transition-colors">contact@cksyndic.ma</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/cksyndic" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-slate-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors">
                  <Facebook className="w-5 h-5 text-slate-100 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 CK Syndic Marrakech. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasAssembly, setHasAssembly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [formData, setFormData] = useState({
    residenceName: '',
    address: '',
    phone: '',
    assemblyDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-request`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          residenceName: formData.residenceName,
          address: formData.address,
          phone: formData.phone,
          hasAssembly: hasAssembly,
          assemblyDate: hasAssembly ? formData.assemblyDate : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSubmitMessage({
        type: 'success',
        text: 'Votre demande a été envoyée avec succès! Nous vous recontacterons bientôt.'
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({
          residenceName: '',
          address: '',
          phone: '',
          assemblyDate: ''
        });
        setHasAssembly(false);
        setSubmitMessage(null);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage onQuoteClick={() => setIsModalOpen(true)} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/services/gestion-administrative" element={<GestionAdministrative />} />
      </Routes>

      {/* Modal Devis Gratuit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-bold text-slate-900">Demander un Devis Gratuit</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label htmlFor="residenceName" className="block text-sm font-semibold text-slate-900 mb-2">
                  Nom de la résidence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="residenceName"
                  required
                  value={formData.residenceName}
                  onChange={(e) => setFormData({ ...formData, residenceName: e.target.value })}
                  placeholder="Ex: Résidence Al Manar"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-slate-900 mb-2">
                  Adresse complète <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Adresse complète de la résidence"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Numéro de téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+212 6XX XX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <input
                    type="checkbox"
                    id="hasAssembly"
                    checked={hasAssembly}
                    onChange={(e) => setHasAssembly(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-2 focus:ring-primary-600 cursor-pointer"
                  />
                  <label htmlFor="hasAssembly" className="text-sm font-semibold text-slate-900 cursor-pointer">
                    Une assemblée générale est prévue
                  </label>
                </div>

                {hasAssembly && (
                  <div className="ml-8 animate-in slide-in-from-top-2 duration-200">
                    <label htmlFor="assemblyDate" className="block text-sm font-semibold text-slate-900 mb-2">
                      Date de l'assemblée générale <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="assemblyDate"
                      required={false}
                      value={formData.assemblyDate}
                      onChange={(e) => setFormData({ ...formData, assemblyDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    />
                  </div>
                )}
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-xl ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {submitMessage.text}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="flex-1 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
