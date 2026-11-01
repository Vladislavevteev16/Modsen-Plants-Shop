import { PlantTypesSlider } from '@/components/PlantTypesSlider';

import s from './HomePage.module.scss';

export const HomePage = () => {
  const handleSelectPlant = (plant: string) => console.log(plant);
  return (
    <main className={s.homePageContainer}>
      <PlantTypesSlider handleSelectPlant={handleSelectPlant} />
    </main>
  );
};
