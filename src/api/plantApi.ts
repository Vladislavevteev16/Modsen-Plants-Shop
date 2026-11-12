import type { PaginatedResponse } from '@/types/plant.types';

import { plantsClient } from './client';

export const getPlantProducts = async (queryParams: string) =>
  plantsClient.get<PaginatedResponse>(`/shop?${queryParams}`);

export const getSuggestionProducts = async (value: string, controller: AbortSignal) =>
  plantsClient.get<PaginatedResponse>(`/shop?name_like=${value}&_limit=3`, { signal: controller });
