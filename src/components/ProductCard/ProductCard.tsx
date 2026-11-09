import { Button } from '@/components/ui/Button';
import { calculateDiscount } from '@/helpers/calculateDiscount';

import { QuantityControl } from '../QuantityControl';
import { DiscountSticker } from '../ui/DiscountSticker';
import s from './ProductCard.module.scss';

type ProductCardProps = {
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  available: boolean;
  cartQuantity: number;
  handleAddPlantInCart: () => void;
  handleRemovePlantInCart: () => void;
};

export const ProductCard = ({
  title,
  image,
  price,
  oldPrice,
  available,
  cartQuantity,
  handleAddPlantInCart,
  handleRemovePlantInCart,
}: ProductCardProps) => {
  const isOutOfStock = !available;
  const discountPercent = calculateDiscount(price, oldPrice);

  return (
    <article className={s.productCard}>
      <div className={s.imageWrapper}>
        <img src={image} alt={title} className={s.image} />
        {oldPrice !== undefined && (
          <div className={s.stickerWrapper}>
            <DiscountSticker discountValue={`${discountPercent}%`} />
          </div>
        )}
      </div>
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.priceBlock}>
          <span className={s.currentPrice}>${price}</span>
          {oldPrice !== undefined && <span className={s.oldPrice}>${oldPrice}</span>}
        </div>
        {cartQuantity > 0 ? (
          <QuantityControl
            quantity={cartQuantity}
            handleIncrement={handleAddPlantInCart}
            handleDecrement={handleRemovePlantInCart}
          />
        ) : (
          <Button disabled={isOutOfStock} onClick={handleAddPlantInCart} className={s.actionBtn}>
            Buy
          </Button>
        )}
      </div>
    </article>
  );
};
