import { BestCategories } from '@/components/BestCategories';
import { PlantTypesSlider } from '@/components/PlantTypesSlider';
import { SearchBar } from '@/components/SearchBar';
import { YouMayAlso } from '@/components/YouMayAlso';
import { useHomePageLogic } from '@/hooks/useHomePageLogic';
import { useMobileDetection } from '@/hooks/useMobileDetection';

import s from './HomePage.module.scss';

export const HomePage = () => {
  const {
    productsWithCart,
    handleSelectPlant,
    handleShopRedirect,
    handleAddPlantInCart,
    handleRemovePlantInCart,
  } = useHomePageLogic();

  const { isMobile } = useMobileDetection();

  return (
    <main className={s.homePageContainer}>
      <PlantTypesSlider handleSelectPlant={handleSelectPlant} />
      {isMobile && <SearchBar isMobileVersion />}
      <BestCategories handleShopRedirect={handleShopRedirect} />
      <YouMayAlso
        products={productsWithCart}
        handleAddPlantInCart={handleAddPlantInCart}
        handleRemovePlantInCart={handleRemovePlantInCart}
        handleShopRedirect={handleShopRedirect}
      />
    </main>
  );
};
