import type { PaginatedResponse } from '@/types/plant.types';

import { plantsClient } from './client';

export const getPlantProducts = async (queryParams: string) =>
  plantsClient.get<PaginatedResponse>(`/shop?${queryParams}`);
