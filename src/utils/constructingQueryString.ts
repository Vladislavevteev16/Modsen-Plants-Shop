import { API_QUERY_KEYS, FILTER_DEFAULTS } from '@/constants/api';
import type { FetchProductsParams } from '@/types/plant.types';

export const constructingQueryString = (params: FetchProductsParams) => {
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append(API_QUERY_KEYS.PAGE, String(params.page));
  if (params.limit) queryParams.append(API_QUERY_KEYS.LIMIT, String(params.limit));
  if (params.search) queryParams.append(API_QUERY_KEYS.SEARCH, params.search);

  if (params.type && params.type !== FILTER_DEFAULTS.ALL) {
    queryParams.append(API_QUERY_KEYS.TYPE, params.type);
  }

  if (params.category && params.category !== FILTER_DEFAULTS.ALL) {
    queryParams.append(API_QUERY_KEYS.CATEGORY, params.category);
  }

  if (params.sale && params.sale !== FILTER_DEFAULTS.ALL) {
    queryParams.append(API_QUERY_KEYS.SALE, params.sale === FILTER_DEFAULTS.YES ? 'true' : 'false');
  }

  return queryParams.toString();
};
