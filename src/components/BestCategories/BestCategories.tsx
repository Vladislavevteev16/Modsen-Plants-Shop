import dracaenaImage from '@/assets/best-categories-images/dracaena-bg.jpg';
import foliageImage from '@/assets/best-categories-images/foliage-bg.jpg';
import pothosImage from '@/assets/best-categories-images/pothos-bg.jpg';

import { CategoryCard } from '../CategoryCard';
import { SectionTitle } from '../SectionTitle';
import s from './BestCategories.module.scss';

const BEST_CATEGORIES = [
  { title: 'Dracaena', image: dracaenaImage, categoryValue: 'Dracaena' },
  { title: 'Pothos', image: pothosImage, categoryValue: 'Pothos' },
  { title: 'Foliage', image: foliageImage, categoryValue: 'Foliage' },
];

type BestCategories = {
  handleShopRedirect: (category: string) => void;
};

export const BestCategories = ({ handleShopRedirect }: BestCategories) => {
  return (
    <section className={s.bestCategoriesContainer}>
      <SectionTitle>Best categories</SectionTitle>
      <div className={s.grid}>
        {BEST_CATEGORIES.map(({ title, image, categoryValue }) => (
          <CategoryCard
            key={title}
            title={title}
            image={image}
            handleShopRedirect={() => handleShopRedirect(categoryValue)}
          />
        ))}
      </div>
    </section>
  );
};
