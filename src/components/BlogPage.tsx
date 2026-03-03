import { BookOpen, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useEffect, useState } from 'react';

export function BlogPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
    document.title = 'Blog Syndic Marrakech | Conseils Copropriété au Maroc | CK Syndic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Retrouvez tous nos articles et conseils sur la gestion de copropriété au Maroc : rôle du syndic, charges, assemblées générales, entretien et plus.');
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.cksyndic.ma/blog');
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

        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-200 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Blog & Conseils</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Blog Syndic Marrakech : Guides et Conseils en Gestion de Copropriété
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos articles et conseils pratiques sur la gestion de copropriété, le rôle du syndic et la réglementation au Maroc
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <Link to={`/blog/${article.slug}`}>
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 h-48 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span suppressHydrationWarning>
                      {isMounted ? new Date(article.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.metaDescription}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    <span>Lire l'article</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Besoin d'un syndic professionnel à Marrakech ?
            </h2>
            <p className="text-slate-600 mb-6">
              CK Syndic vous accompagne dans la gestion de votre copropriété avec professionnalisme et transparence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#services"
                className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/30"
              >
                Découvrir nos services
              </Link>
              <Link
                to="/#contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
