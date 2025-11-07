export interface Article {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  content: ArticleSection[];
  publishedAt: string;
}

export interface ArticleSection {
  type: 'heading' | 'paragraph' | 'list';
  content: string;
  level?: number;
  items?: string[];
}
