import { REACT_APP_PUBLIC_DOMAIN } from './env';

export const API_URL = () => {
  const baseUrl = REACT_APP_PUBLIC_DOMAIN

  return {
    banner: `${baseUrl}/mockDataBanner.json`,
  };
};
