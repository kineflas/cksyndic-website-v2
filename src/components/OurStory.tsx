import { AlertTriangle, XCircle, Users, TrendingUp, Building2, Shield, Eye, CheckCircle2, MessageCircle } from 'lucide-react';

export function OurStory() {
  return (
    <section id="notre-histoire" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Accroche / empathie */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Vous avez investi dans votre résidence… mais votre syndic vous déçoit ?
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Manque de transparence, retards, impayés… et votre qualité de vie en souffre ?
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg inline-block">
              <p className="text-lg font-semibold text-slate-900">
                Nous avons vécu la même chose.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Les tentatives infructueuses */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Quand deux syndics réputés ne suffisent pas
            </h3>

            <div className="relative">
              {/* Timeline horizontal */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2"></div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Société A */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 hover:shadow-xl transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Société A</h4>
                  <p className="text-slate-700 text-center leading-relaxed">
                    Manque de réactivité et transparence financière
                  </p>
                </div>

                {/* Société B */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 hover:shadow-xl transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Société B</h4>
                  <p className="text-slate-700 text-center leading-relaxed">
                    Dettes accumulées, impayés non recouvrés
                  </p>
                </div>

                {/* Résultat */}
                <div className="bg-red-50 rounded-2xl p-6 shadow-lg border-2 border-red-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-700" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-red-900 text-center mb-3">La résidence</h4>
                  <p className="text-red-800 text-center font-semibold leading-relaxed">
                    était en péril
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: La décision audacieuse */}
        <div className="mb-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Nous avons pris les choses en main
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Nous n'étions pas professionnels du syndic, mais avec nos expertises combinées – sécurité, bâtiment, commercial – nous avons rétabli la situation financière, amélioré la sécurité et instauré la transparence.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg inline-block border-l-4 border-primary-600">
                <p className="text-xl font-bold text-primary-900">
                  Notre objectif : protéger la résidence et la tranquillité de ses habitants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Les résultats concrets */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Des actions visibles, des résultats mesurables
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Recouvrement des charges</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">45% → 90%</div>
                  <p className="text-slate-600">Taux de paiement</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Sécurité améliorée</h4>
                <p className="text-slate-700 text-center leading-relaxed">
                  Gardiennage 24/7, contrôle d'accès, ménage régulier
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-3">Transparence totale</h4>
                <p className="text-slate-700 text-center leading-relaxed">
                  Accès complet aux comptes et rapports
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: La création de CK Syndic */}
        <div className="mb-20 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-6">
              <Building2 className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Notre expertise devient votre partenaire
            </h3>
            <p className="text-lg text-slate-100 leading-relaxed mb-8">
              Pour continuer à offrir un service fiable et de qualité, nous avons créé CK Syndic. Aujourd'hui, nous accompagnons d'autres résidences à Marrakech et partout au Maroc, pour qu'elles ne vivent plus les mêmes difficultés que nous avons rencontrées.
            </p>
            <a
              href="https://wa.me/212714585557?text=Bonjour%2C%20je%20souhaite%20parler%20de%20ma%20r%C3%A9sidence%20et%20obtenir%20plus%20d%27informations%20sur%20vos%20services%20de%20syndic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Parlons de votre résidence</span>
            </a>
            <p className="text-sm text-slate-100 mt-4">
              Diagnostic gratuit, sans engagement
            </p>
          </div>
        </div>

        {/* Section 6: Pourquoi nous choisir ? */}
        <div>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Nous comprenons vos besoins mieux que personne
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                  Expérience concrète sur le terrain
                </h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  Nous avons vécu les mêmes problèmes que vous
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                  Transparence et suivi en temps réel
                </h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  Accès complet à toutes vos informations
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                  Service centré sur la qualité
                </h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  Votre confiance est notre priorité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
