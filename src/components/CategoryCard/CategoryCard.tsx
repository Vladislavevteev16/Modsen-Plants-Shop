import clsx from 'clsx';

import { Button } from '@/components/ui/Button';
import { CARD_VARIANT, TITLE_BUTTON } from '@/constants/card';

import { QuantityControl } from '../QuantityControl';
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
  handleIncrement?: () => void;
  handleDecrement?: () => void;
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
  handleIncrement,
  handleDecrement,
  variant,
}: CategoryCardProps) => {
  const isProduct = variant === CARD_VARIANT.PRODUCT;
  const isOutOfStock = available === false;
  const isItemInCart = cartQuantity > 0;

  const handleButtonClick = () => {
    if (isProduct) {
      handleIncrement?.();
    } else {
      handleShopRedirect?.();
    }
  };

  return (
    <article
      className={clsx(s.cardContainer, {
        [s.productCard]: isProduct,
        [s.categoryCard]: !isProduct,
      })}
    >
      <div className={s.imageWrapper}>
        <img src={image} alt={title} className={s.image} />
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
            handleIncrement={handleIncrement!}
            handleDecrement={handleDecrement!}
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
