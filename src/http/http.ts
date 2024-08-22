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

const fetchMethod = async (path: string, method: MethodTypes, payload: any) => {
  try {
    const res = await fetch(buildUrl(path), {
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
  getArticles: async (filter: IFilter) => {
    const path = '/baas/article';
    const data = await fetchMethod(path, MethodTypes.POST, { filter });
    return data;
  },
  getArticle: async (articleId: string) => {
    console.log('process.env.NEXT_PUBLIC_CUSTOMER_ID:');
    console.log(process.env.NEXT_PUBLIC_CUSTOMER_ID);
    const path = `/baas/article?articleId=${articleId}&customerId=${process.env.NEXT_PUBLIC_CUSTOMER_ID}`;
    const data = await fetchMethod(path, MethodTypes.GET, null);
    return data;
  },
  getCategories: async () => {
    const path = `/baas/config?categoriesOnly=true&customerId=${process.env.NEXT_PUBLIC_CUSTOMER_ID}`;
    const data = await fetchMethod(path, MethodTypes.GET, null);
    return data;
  },
};
