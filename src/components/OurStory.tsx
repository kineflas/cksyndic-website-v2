import { AlertTriangle, XCircle, Users, TrendingUp, Building2, Shield, Eye, CheckCircle2, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';

export function OurStory() {
  const { ref: s1Ref, isInView: s1InView } = useInView(0.1);
  const { ref: s2Ref, isInView: s2InView } = useInView(0.1);
  const { ref: s3Ref, isInView: s3InView } = useInView(0.1);
  const { ref: s4Ref, isInView: s4InView } = useInView(0.1);
  const { ref: s5Ref, isInView: s5InView } = useInView(0.2);
  const { ref: s6Ref, isInView: s6InView } = useInView(0.1);

  const { ref: counterRef, count: recouvrementCount } = useCounter(90, 1800, 45);

  return (
    <section id="notre-histoire" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Accroche */}
        <div ref={s1Ref} className="mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 reveal ${s1InView ? 'in-view' : ''}`}>
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Vous avez investi dans votre résidence… mais votre syndic vous{' '}
              <span className="gradient-text">déçoit ?</span>
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto reveal delay-200 ${s1InView ? 'in-view' : ''}`}>
              Manque de transparence, retards, impayés… et votre qualité de vie en souffre ?
            </p>
            <div className={`bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg inline-block reveal delay-300 ${s1InView ? 'in-view' : ''}`}>
              <p className="text-lg font-semibold text-slate-900">
                Nous avons vécu la même chose.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Tentatives infructueuses */}
        <div ref={s2Ref} className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className={`text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12 reveal ${s2InView ? 'in-view' : ''}`}>
              Quand deux syndics réputés ne suffisent pas
            </h3>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2" />
              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  { label: 'Société A', text: 'Manque de réactivité et transparence financière', delay: 'delay-100' },
                  { label: 'Société B', text: 'Dettes accumulées, impayés non recouvrés', delay: 'delay-300' },
                ].map(({ label, text, delay }) => (
                  <div key={label} className={`card-lift bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 reveal ${delay} ${s2InView ? 'in-view' : ''}`}>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 text-center mb-3">{label}</h4>
                    <p className="text-slate-700 text-center leading-relaxed">{text}</p>
                  </div>
                ))}
                <div className={`card-lift bg-red-50 rounded-2xl p-6 shadow-lg border-2 border-red-300 reveal delay-500 ${s2InView ? 'in-view' : ''}`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-700" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-red-900 text-center mb-3">La résidence</h4>
                  <p className="text-red-800 text-center font-semibold leading-relaxed">était en péril</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Décision */}
        <div ref={s3Ref} className="mb-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6 animate-pulse-ring reveal ${s3InView ? 'in-view' : ''}`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-6 reveal delay-100 ${s3InView ? 'in-view' : ''}`}>
                Nous avons pris les choses en main
              </h3>
              <p className={`text-lg text-slate-700 leading-relaxed mb-6 reveal delay-200 ${s3InView ? 'in-view' : ''}`}>
                Nous n'étions pas professionnels du syndic, mais avec nos expertises combinées – sécurité, bâtiment, commercial – nous avons rétabli la situation financière, amélioré la sécurité et instauré la transparence.
              </p>
              <div className={`bg-white rounded-2xl p-6 shadow-lg inline-block border-l-4 border-primary-600 reveal delay-300 ${s3InView ? 'in-view' : ''}`}>
                <p className="text-xl font-bold text-primary-900">
                  Notre objectif : protéger la résidence et la tranquillité de ses habitants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Résultats */}
        <div ref={s4Ref} className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className={`text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12 reveal ${s4InView ? 'in-view' : ''}`}>
              Des actions visibles, des résultats mesurables
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div ref={counterRef} className={`card-lift bg-white rounded-2xl p-8 shadow-lg border border-slate-100 reveal delay-100 ${s4InView ? 'in-view' : ''}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Recouvrement des charges</h4>
                <div className="text-center">
                  <div suppressHydrationWarning className="text-4xl font-bold text-green-600 mb-2">45% → {recouvrementCount}%</div>
                  <p className="text-slate-600">Taux de paiement</p>
                </div>
              </div>

              {[
                { icon: Shield, title: 'Sécurité améliorée', text: "Gardiennage 24/7, contrôle d'accès, ménage régulier", delay: 'delay-300' },
                { icon: Eye, title: 'Transparence totale', text: 'Accès complet aux comptes et rapports', delay: 'delay-500' },
              ].map(({ icon: Icon, title, text, delay }) => (
                <div key={title} className={`card-lift bg-white rounded-2xl p-8 shadow-lg border border-slate-100 reveal ${delay} ${s4InView ? 'in-view' : ''}`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 text-center mb-3">{title}</h4>
                  <p className="text-slate-700 text-center leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Création CK Syndic */}
        <div ref={s5Ref} className="mb-20 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 overflow-hidden relative">
          <div className="blob w-64 h-64 bg-primary-600/20 -top-10 -right-10 animate-morph" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-6 animate-float reveal ${s5InView ? 'in-view' : ''}`}>
              <Building2 className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 text-white reveal delay-100 ${s5InView ? 'in-view' : ''}`}>
              Notre expertise devient votre partenaire
            </h3>
            <p className={`text-lg text-slate-100 leading-relaxed mb-8 reveal delay-200 ${s5InView ? 'in-view' : ''}`}>
              Pour continuer à offrir un service fiable et de qualité, nous avons créé CK Syndic. Aujourd'hui, nous accompagnons d'autres résidences à Marrakech et partout au Maroc, pour qu'elles ne vivent plus les mêmes difficultés que nous avons rencontrées.
            </p>
            <div className={`reveal delay-300 ${s5InView ? 'in-view' : ''}`}>
              <a
                href="https://wa.me/212714585557?text=Bonjour%2C%20je%20souhaite%20parler%20de%20ma%20r%C3%A9sidence%20et%20obtenir%20plus%20d%27informations%20sur%20vos%20services%20de%20syndic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Parlons de votre résidence</span>
              </a>
              <p className="text-sm text-slate-300 mt-4">Diagnostic gratuit, sans engagement</p>
            </div>
          </div>
        </div>

        {/* Section 6: Pourquoi nous choisir */}
        <div ref={s6Ref}>
          <div className="max-w-5xl mx-auto">
            <h3 className={`text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12 reveal ${s6InView ? 'in-view' : ''}`}>
              Nous comprenons vos besoins mieux que personne
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle2, title: 'Expérience concrète sur le terrain', text: 'Nous avons vécu les mêmes problèmes que vous', delay: 'delay-100' },
                { icon: Eye, title: 'Transparence et suivi en temps réel', text: 'Accès complet à toutes vos informations', delay: 'delay-300' },
                { icon: Shield, title: 'Service centré sur la qualité', text: 'Votre confiance est notre priorité', delay: 'delay-500' },
              ].map(({ icon: Icon, title, text, delay }) => (
                <div key={title} className={`card-lift bg-white rounded-2xl p-8 shadow-lg border border-slate-100 reveal ${delay} ${s6InView ? 'in-view' : ''}`}>
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 text-center mb-4">{title}</h4>
                  <p className="text-slate-600 text-center leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
