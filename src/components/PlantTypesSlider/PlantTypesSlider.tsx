import ArrowLeftIcon from '@/assets/arrow-left.svg?react';
import ArrowRightIcon from '@/assets/arrow-right.svg?react';
import { DIRECTION, useSliderLogic } from '@/hooks/useSliderLogic';

import { CardSlider } from '../CardSlider';
import s from './PlantTypesSlider.module.scss';

type PlantTypesSliderProps = {
  handleSelectPlant: (plant: string) => void;
};

export const PlantTypesSlider = ({ handleSelectPlant }: PlantTypesSliderProps) => {
  const { handleScroll, plantsTypeList, sliderRef } = useSliderLogic();

  return (
    <section className={s.sliderContainer}>
      <h2 className={s.sectionTitle}>Plant types</h2>

      <div className={s.sliderWrapper}>
        <button
          type="button"
          className={`${s.arrowBtn} ${s.arrowLeft}`}
          onClick={() => handleScroll(DIRECTION.left)}
        >
          <ArrowLeftIcon />
        </button>

        <div className={s.sliderTrack} ref={sliderRef}>
          {plantsTypeList.map(({ typeValue, title, image }) => (
            <CardSlider
              typeValue={typeValue}
              key={title}
              title={title}
              image={image}
              handleSelectPlant={handleSelectPlant}
            />
          ))}
        </div>

        <button
          type="button"
          className={`${s.arrowBtn} ${s.arrowRight}`}
          onClick={() => handleScroll(DIRECTION.right)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};
