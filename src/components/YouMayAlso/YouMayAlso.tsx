import type { Plant } from '@/types/plant.types';

import { CategoryCard } from '../CategoryCard';
import { SectionTitle } from '../SectionTitle';
import s from './YouMayAlso.module.scss';

type YouMayAlsoProps = {
  products: Plant[];
  handleIncrement: (product: Plant) => void;
  handleDecrement: (productId: string) => void;
  handleShopRedirect: (productId: string) => void;
};
export const YouMayAlso = ({
  products,
  handleDecrement,
  handleIncrement,
  handleShopRedirect,
}: YouMayAlsoProps) => {
  return (
    <div className={s.youMayAlsoContainer}>
      <SectionTitle>You May Also Like...</SectionTitle>
      <div className={s.productGrid}>
        {products.map((product) => (
          <CategoryCard
            key={product.id}
            variant="product"
            title={product.name}
            image={product.imageURL[0]}
            price={product.price}
            oldPrice={product.withDiscount ? product.discount : undefined}
            available={product.available}
            cartQuantity={0}
            handleIncrement={() => handleIncrement(product)}
            handleDecrement={() => handleDecrement(product.id)}
            handleShopRedirect={() => handleShopRedirect(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
