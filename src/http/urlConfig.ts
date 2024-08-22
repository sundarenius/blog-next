import { Environments } from '@/types/globals';

const config = {
  [Environments.PRODUCTION]: {
    apiEndpoint: process.env.NEX_PUBLIC_BAAS_BASE_URL,
  },
  [Environments.STAGING]: {
    apiEndpoint: process.env.NEX_PUBLIC_BAAS_BASE_URL,
  },
  [Environments.DEVELOPMENT]: {
    apiEndpoint: process.env.NEX_PUBLIC_BAAS_BASE_URL,
  },
};

export default config