import urlConfig from './urlConfig';
import type { IFilter, Environments } from '@/types/globals';

enum MethodTypes {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const baseUrl = `${urlConfig[process.env.NODE_ENV as Environments].apiEndpoint}`;

const buildUrl = (path: string) => `${baseUrl}${path}`;

const fetchMethod = async (path: string, method: MethodTypes, payload: any) => {
  try {
    const res = await fetch(buildUrl(path), {
      method,
      cache: 'force-cache',
      headers: {
        'Content-Type': 'application/json',
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
    const path = '/article';
    const data = await fetchMethod(path, MethodTypes.POST, { filter });
    return data;
  },
  getArticle: async (articleId: string) => {
    const path = `/article?articleId=${articleId}&customerId=${process.env.CUSTOMER_ID}`;
    const data = await fetchMethod(path, MethodTypes.GET, null);
    return data;
  },
};
