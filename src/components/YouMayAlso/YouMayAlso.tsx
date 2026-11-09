import type { Plant } from '@/types/plant.types';

import { ProductCard } from '../ProductCard';
import { SectionTitle } from '../SectionTitle';
import { Loader } from '../ui/Loader';
import s from './YouMayAlso.module.scss';

type ProductWithQuantity = Plant & {
  quantity: number;
};

type YouMayAlsoProps = {
  products: ProductWithQuantity[];
  handleAddPlantInCart: (product: Plant) => void;
  handleRemovePlantInCart: (productId: string) => void;
  isLoading: boolean;
  error: string | null;
};
export const YouMayAlso = ({
  products,
  handleAddPlantInCart,
  handleRemovePlantInCart,
  isLoading,
  error,
}: YouMayAlsoProps) => {
  return (
    <div className={s.youMayAlsoContainer}>
      <SectionTitle>You May Also Like...</SectionTitle>
      {isLoading ? (
        <div className={s.loaderWrapper}>
          <Loader className={s.loader} isLoading />
        </div>
      ) : error ? (
        <div className={s.errorWrapper}>
          <p>{error}</p>
        </div>
      ) : (
        <div className={s.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.imageURL[0]}
              price={product.withDiscount ? product.discount : product.price}
              oldPrice={product.withDiscount ? product.price : undefined}
              available={product.available}
              cartQuantity={product.quantity}
              handleAddPlantInCart={() => handleAddPlantInCart(product)}
              handleRemovePlantInCart={() => handleRemovePlantInCart(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
