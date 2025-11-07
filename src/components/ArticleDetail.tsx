import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Article, ArticleSection as ArticleSectionType } from '../types/article';
import { useEffect } from 'react';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  onQuoteClick: () => void;
}

export function ArticleDetail({ article, onBack, onQuoteClick }: ArticleDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${article.seoTitle} | CK Syndic`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', article.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = article.metaDescription;
      document.head.appendChild(meta);
    }
  }, [article]);

  const renderSection = (section: ArticleSectionType, index: number) => {
    switch (section.type) {
      case 'heading':
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
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Retour aux articles</span>
        </button>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 text-white">
            <div className="flex items-center space-x-2 text-blue-100 mb-4">
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
            <p className="text-xl text-blue-100">{article.metaDescription}</p>
          </div>

          <div className="px-8 py-12">
            {article.content.map((section, index) => renderSection(section, index))}

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Besoin d'un syndic professionnel ?
                </h3>
                <p className="text-slate-600 mb-6">
                  CK Syndic vous accompagne dans la gestion de votre copropriété à Marrakech
                </p>
                <button
                  onClick={onQuoteClick}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30"
                >
                  Demander un devis gratuit
                </button>
              </div>
            </div>

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
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Partager cet article</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
