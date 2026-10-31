export type PaginatedResponse = {
  images: {
    total_count: number;
    total_page: number;
    current_page: number;
    limit: number;
    data: Plant[];
  };
};

export type Plant = {
  id: string;
  imageURL: string[];
  name: string;
  price: number;
  withDiscount: boolean;
  type: string;
  category: string;
  available: boolean;
  discount: number;
};

export type FetchProductsParams = Partial<{
  page: number;
  limit: number;
  search: string;
  type: string;
  category: string;
  sale: string;
}>;
