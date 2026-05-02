import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

export function BlogSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isInView } = useInView(0.1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div ref={ref} className="text-center mb-16">
        <div className={`inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-200 mb-6 reveal ${isInView ? 'in-view' : ''}`}>
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Blog & Conseils</span>
        </div>
        <h2 className={`text-4xl font-bold text-slate-900 mb-4 reveal delay-100 ${isInView ? 'in-view' : ''}`}>
          Guides et Conseils en{' '}
          <span className="gradient-text">Gestion de Copropriété</span>
        </h2>
        <p className={`text-xl text-slate-600 max-w-3xl mx-auto reveal delay-200 ${isInView ? 'in-view' : ''}`}>
          Découvrez nos articles et conseils pratiques sur la gestion de copropriété, le rôle du syndic et la réglementation au Maroc
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 6).map((article, i) => (
          <article
            key={article.id}
            className={`card-lift bg-white rounded-2xl shadow-lg overflow-hidden group reveal ${isInView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${i * 80 + 100}ms` }}
          >
            <Link to={`/blog/${article.slug}`}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(to bottom right, #1e3a8a, #1a3078)' }}>
                <div className="blob w-32 h-32 bg-blue-400/20 -top-4 -right-4" style={{ filter: 'blur(20px)' }} />
                <BookOpen className="w-16 h-16 text-white opacity-70 relative z-10 group-hover:scale-110 transition-transform duration-300" />
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

      {articles.length > 6 && (
        <div className={`text-center mt-12 reveal delay-500 ${isInView ? 'in-view' : ''}`}>
          <Link
            to="/blog"
            className="btn-shimmer inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary-600/30"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </section>
  );
}
