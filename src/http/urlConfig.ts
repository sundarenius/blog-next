import { Environments } from '@/types/globals';

const config = {
  [Environments.PRODUCTION]: {
    apiEndpoint: 'http://16.171.64.87/api/v1',
  },
  [Environments.STAGING]: {
    apiEndpoint: 'heroku.blabla/api/v1',
  },
  [Environments.DEVELOPMENT]: {
    apiEndpoint: 'http://localhost:3030/api/v1',
  },
};

export default config