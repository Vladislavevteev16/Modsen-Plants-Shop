export const API_QUERY_KEYS = {
  PAGE: '_page',
  LIMIT: '_limit',
  SEARCH: 'name_like',
  TYPE: 'type',
  CATEGORY: 'category',
  SALE: 'withDiscount',
} as const;

export const FILTER_DEFAULTS = {
  ALL: 'All',
  YES: 'Yes',
  NO: 'No',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 6,
} as const;
