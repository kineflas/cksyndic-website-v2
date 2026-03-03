import { articles } from './src/data/articles';

export default {
  routes: [
    '/',
    '/blog',
    ...articles.map(article => `/blog/${article.slug}`)
  ],
};
