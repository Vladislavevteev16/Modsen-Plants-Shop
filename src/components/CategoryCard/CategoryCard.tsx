import { Button } from '@/components/ui/Button';
import { TITLE_BUTTON } from '@/constants/card';

import s from './CategoryCard.module.scss';

type CategoryCardProps = {
  title: string;
  image: string;
  handleShopRedirect: () => void;
};

export const CategoryCard = ({ title, image, handleShopRedirect }: CategoryCardProps) => {
  return (
    <article className={s.categoryCard}>
      <div className={s.imageWrapper}>
        <img src={image} alt={title} className={s.image} />
        <h3 className={s.title}>{title}</h3>
      </div>
      <div className={s.content}>
        <Button onClick={handleShopRedirect} className={s.actionBtn}>
          {TITLE_BUTTON.SHOP}
        </Button>
      </div>
    </article>
  );
};
