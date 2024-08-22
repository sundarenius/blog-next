import urlConfig from './urlConfig';
import type { IFilter, Environments } from '@/types/globals';

enum MethodTypes {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const baseUrl = `${urlConfig[process.env.NODE_ENV as Environments].apiEndpoint}`;

// Generate a unique cache-busting key (timestamp in this example)
const cacheBustingKey = () => new Date().getTime();
const buildUrl = (path: string) => `${baseUrl}${path}${path.includes('?') ? '&' : '?'}c=${cacheBustingKey()}`;

const fetchMethod = async (path: string, method: MethodTypes, payload: any, fullUrl = false) => {
  try {
    const url = fullUrl ? path : buildUrl(path);
    const res = await fetch(url, {
      method,
      next: { revalidate: 0 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MY_API_POST_KEY || 'x'}`,
      },
      ...payload && { body: JSON.stringify(payload) },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('failed');
    console.log(err);
    return false;
  }
};

export const API = {
  getArticlesServer: async (filter: IFilter) => {
    const path = '/api/v1/baas/article';
    const data = await fetchMethod(path, MethodTypes.POST, { filter });
    return data;
  },
  getArticles: async (filter: IFilter) => {
    const path = 'http://localhost:3000/api/get-article';
    const data = await fetchMethod(path, MethodTypes.POST, { filter }, true);
    return data;
  },
  getArticle: async (articleId: string) => {
    console.log('process.env.NEXT_PUBLIC_CUSTOMER_ID:');
    console.log(process.env.NEXT_PUBLIC_CUSTOMER_ID);
    const path = `/api/v1/baas/article?articleId=${articleId}&customerId=${process.env.NEXT_PUBLIC_CUSTOMER_ID}`;
    const data = await fetchMethod(path, MethodTypes.GET, null);
    return data;
  },
  getCategories: async () => {
    const path = `/api/v1/baas/config?categoriesOnly=true&customerId=${process.env.NEXT_PUBLIC_CUSTOMER_ID}`;
    const data = await fetchMethod(path, MethodTypes.GET, null);
    return data;
  },
};
