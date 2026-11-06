import type { CartPlant } from '@/redux/store/slices/cartSlice';
import type { Plant } from '@/types/plant.types';

import { CategoryCard } from '../CategoryCard';
import { SectionTitle } from '../SectionTitle';
import s from './YouMayAlso.module.scss';

type YouMayAlsoProps = {
  products: CartPlant[];
  handleAddPlantInCart: (product: Plant) => void;
  handleRemovePlantInCart: (productId: string) => void;
  handleShopRedirect: (product: string) => void;
};
export const YouMayAlso = ({
  products,
  handleAddPlantInCart,
  handleRemovePlantInCart,
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
            price={product.withDiscount ? product.discount : product.price}
            oldPrice={product.withDiscount ? product.price : undefined}
            available={product.available}
            cartQuantity={product.quantity}
            handleAddPlantInCart={() => handleAddPlantInCart(product)}
            handleRemovePlantInCart={() => handleRemovePlantInCart(product.id)}
            handleShopRedirect={() => handleShopRedirect(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
