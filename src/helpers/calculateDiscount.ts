export const calculateDiscount = (price?: number, oldPrice?: number): number => {
  return price && oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;
};
