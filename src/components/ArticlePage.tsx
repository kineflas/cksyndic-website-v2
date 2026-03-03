import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Share2, BookOpen, Home, Wrench, Mail } from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleSection as ArticleSectionType } from '../types/article';
import { useEffect } from 'react';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = articles.findIndex(a => a.slug === slug);
  const article = articleIndex !== -1 ? articles[articleIndex] : null;

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;
  const otherArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.seoTitle} | CK Syndic Marrakech`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.metaDescription);
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://www.cksyndic.ma/blog/${article.slug}`);
      }
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const renderSection = (section: ArticleSectionType, index: number) => {
    switch (section.type) {
      case 'heading': {
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={`font-bold text-slate-900 ${
              section.level === 2 ? 'text-2xl mt-8 mb-4' : 'text-xl mt-6 mb-3'
            }`}
          >
            {section.content}
          </HeadingTag>
        );
      }
      case 'paragraph':
        return (
          <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
            {section.content}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                <span className="text-lg text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Retour aux articles</span>
        </Link>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 px-8 py-16 text-white">
            <div className="flex items-center space-x-2 text-primary-100 mb-4">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-primary-100">{article.metaDescription}</p>
          </div>

          <div className="px-8 py-12">
            {article.content.map((section, index) => renderSection(section, index))}

            {/* Maillage interne - liens vers accueil, services, contact */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Besoin d'un syndic professionnel à Marrakech ?
                </h3>
                <p className="text-slate-600 mb-6">
                  CK Syndic vous accompagne dans la gestion de votre copropriété à Marrakech
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                  >
                    <Home className="w-4 h-4" />
                    <span>Accueil</span>
                  </Link>
                  <Link
                    to="/#services"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Nos services</span>
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/30"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Nous contacter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation article précédent / suivant */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
                >
                  <span className="text-sm text-slate-500 mb-1 block">← Article précédent</span>
                  <span className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
              {nextArticle && (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors group text-right"
                >
                  <span className="text-sm text-slate-500 mb-1 block">Article suivant →</span>
                  <span className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>

            {/* Partager */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.metaDescription,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Partager cet article</span>
              </button>
            </div>
          </div>
        </article>

        {/* Autres articles du blog */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Autres articles du blog</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherArticles.map((other) => (
              <Link
                key={other.id}
                to={`/blog/${other.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 h-32 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white opacity-80" />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(other.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <div className="flex items-center text-primary-600 font-semibold mt-3 text-sm">
                    <span>Lire</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <span>Voir tous les articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
