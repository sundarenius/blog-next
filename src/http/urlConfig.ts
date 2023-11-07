import { Environments } from '@/types/globals';

const config = {
  [Environments.PRODUCTION]: {
    apiEndpoint: 'https://baas-server-production-3c5dcc742018.herokuapp.com/api/v1',
  },
  [Environments.STAGING]: {
    apiEndpoint: 'heroku.blabla/api/v1',
  },
  [Environments.DEVELOPMENT]: {
    apiEndpoint: 'http://localhost:3030/api/v1',
    // apiEndpoint: 'https://baas-server-production-3c5dcc742018.herokuapp.com/api/v1',
  },
};

export default config