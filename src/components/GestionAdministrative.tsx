import { ArrowLeft, CheckCircle2, FileText, Users, Scale, Calculator, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function GestionAdministrative() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Gestion Administrative Syndic Marrakech | CK Syndic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Service de gestion administrative de copropriété à Marrakech : assemblées générales, comptabilité transparente, gestion juridique. Devis gratuit.');
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.cksyndic.ma/services/gestion-administrative');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-primary-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Retour à l'accueil</span>
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 px-8 py-16 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">Service Professionnel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Gestion Administrative de Copropriété à Marrakech : Transparence et Rigueur
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              CK Syndic assure la gestion administrative complète de votre copropriété avec professionnalisme, transparence et conformité juridique.
            </p>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                La gestion administrative d'une copropriété nécessite rigueur, expertise et transparence. Chez CK Syndic, nous mettons notre expérience au service de votre résidence pour assurer une gestion optimale, conforme aux réglementations marocaines et aux attentes des copropriétaires.
              </p>

              <div className="my-12 bg-gradient-to-br from-slate-50 to-primary-50 rounded-2xl p-8 border border-primary-100">
                <img
                  src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                  alt="Gestion administrative professionnelle pour copropriété à Marrakech"
                  width="1200"
                  height="600"
                  className="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-primary-600 mr-3" />
                  Les 3 Piliers de Notre Gestion Administrative
                </h2>
                <p className="text-slate-700 mb-8">
                  Notre service de gestion administrative repose sur trois piliers essentiels qui garantissent le bon fonctionnement de votre copropriété.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Calendar className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1. Assemblées Générales</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Organisation et animation des assemblées générales ordinaires et extraordinaires dans le respect des délais légaux.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Calculator className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">2. Comptabilité Transparente</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tenue rigoureuse des comptes de la copropriété avec accès en ligne et reporting régulier.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-primary-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Scale className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">3. Gestion Juridique</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Veille juridique, rédaction des procès-verbaux et suivi de la conformité réglementaire.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary-600 mr-3" />
                  Nos Missions de Gestion Administrative
                </h2>

                <div className="bg-slate-50 rounded-2xl p-8 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Assemblées Générales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Convocation des copropriétaires dans les délais légaux</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Préparation de l'ordre du jour et des documents justificatifs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Animation et tenue de l'assemblée</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Rédaction et diffusion du procès-verbal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Suivi des résolutions votées</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Comptabilité et Finance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Établissement du budget prévisionnel annuel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Appel et recouvrement des charges de copropriété</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Tenue de la comptabilité et des comptes bancaires</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Paiement des fournisseurs et prestataires</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Production des états financiers et rapports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Gestion des impayés et procédures de recouvrement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Gestion Juridique et Administrative</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Conservation et mise à jour du registre de la copropriété</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Gestion des contrats d'assurance et de maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Veille juridique et application de la réglementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Gestion des sinistres et déclarations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Médiation et résolution des conflits</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-primary-600 mr-3" />
                  Pourquoi Choisir CK Syndic pour Votre Gestion Administrative ?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-lg p-3 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Transparence Totale</h3>
                      <p className="text-slate-600">Accès en ligne à tous vos documents et comptes, disponibles 24h/24.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-lg p-3 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Expertise Locale</h3>
                      <p className="text-slate-600">Connaissance approfondie des spécificités de Marrakech et du Maroc.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-lg p-3 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Réactivité</h3>
                      <p className="text-slate-600">Équipe dédiée disponible pour répondre à vos questions rapidement.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-50 rounded-lg p-3 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Conformité Garantie</h3>
                      <p className="text-slate-600">Respect strict de la législation marocaine sur la copropriété.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center my-12">
                <h2 className="text-3xl font-bold mb-4">Confiez-nous la Gestion de Votre Copropriété</h2>
                <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
                  Profitez d'une gestion administrative rigoureuse et transparente pour votre résidence à Marrakech.
                </p>
                <Link
                  to="/#contact"
                  className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-xl"
                >
                  Demander un devis gratuit
                </Link>
              </div>

              <section className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Liens Utiles</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    to="/"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour à l'accueil</span>
                  </Link>
                  <Link
                    to="/#contact"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Nous contacter</span>
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Blog & Conseils</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
