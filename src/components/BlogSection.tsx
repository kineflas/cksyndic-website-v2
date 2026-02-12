import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

interface BlogSectionProps {
  onArticleClick: (slug: string) => void;
}

export function BlogSection({ onArticleClick }: BlogSectionProps) {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-200 mb-6">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Blog & Conseils</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Guides et Conseils en Gestion de Copropriété au Maroc
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Découvrez nos articles et conseils pratiques sur la gestion de copropriété, le rôle du syndic et la réglementation au Maroc
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => onArticleClick(article.slug)}
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 h-48 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-white opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
          </article>
        ))}
      </div>
    </section>
  );
}
