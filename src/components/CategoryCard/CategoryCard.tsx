import clsx from 'clsx';

import { Button } from '@/components/ui/Button';
import { CARD_VARIANT, TITLE_BUTTON } from '@/constants/card';
import { calculateDiscount } from '@/helpers/calculateDiscount';

import { QuantityControl } from '../QuantityControl';
import { DiscountSticker } from '../ui/DiscountSticker/DiscountSticker';
import s from './CategoryCard.module.scss';

type CardVariant = 'category' | 'product';

type CategoryCardProps = {
  title: string;
  image: string;
  price?: number;
  oldPrice?: number;
  available?: boolean;
  cartQuantity?: number;
  handleShopRedirect?: () => void;
  handleAddPlantInCart?: () => void;
  handleRemovePlantInCart?: () => void;
  variant: CardVariant;
};

export const CategoryCard = ({
  title,
  image,
  price,
  oldPrice,
  available,
  handleShopRedirect,
  cartQuantity = 0,
  handleAddPlantInCart,
  handleRemovePlantInCart,
  variant,
}: CategoryCardProps) => {
  const isProduct = variant === CARD_VARIANT.PRODUCT;
  const isOutOfStock = available === false;
  const isItemInCart = cartQuantity > 0;

  const discountPercent = calculateDiscount(price, oldPrice);

  const handleButtonClick = () => (isProduct ? handleAddPlantInCart?.() : handleShopRedirect?.());

  return (
    <article
      className={clsx(s.cardContainer, {
        [s.productCard]: isProduct,
        [s.categoryCard]: !isProduct,
      })}
    >
      <div className={s.imageWrapper}>
        <img src={image} alt={title} className={s.image} />
        {isProduct && oldPrice && (
          <div className={s.stickerWrapper}>
            <DiscountSticker discountValue={`${discountPercent}%`} />
          </div>
        )}
        {!isProduct && <h3 className={s.title}>{title}</h3>}
      </div>
      <div className={s.content}>
        {isProduct && <h3 className={s.title}>{title}</h3>}
        {isProduct && (
          <div className={s.priceBlock}>
            <span className={s.currentPrice}>${price}</span>
            {oldPrice && <span className={s.oldPrice}>${oldPrice}</span>}
          </div>
        )}
        {isProduct && isItemInCart ? (
          <QuantityControl
            quantity={cartQuantity}
            handleIncrement={handleAddPlantInCart!}
            handleDecrement={handleRemovePlantInCart!}
          />
        ) : (
          <Button disabled={isOutOfStock} onClick={handleButtonClick} className={s.actionBtn}>
            {isProduct ? TITLE_BUTTON.BUY : TITLE_BUTTON.SHOP}
          </Button>
        )}
      </div>
    </article>
  );
};
