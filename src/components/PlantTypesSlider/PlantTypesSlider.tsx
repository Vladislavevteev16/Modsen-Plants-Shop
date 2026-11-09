import clsx from 'clsx';

import ArrowLeftIcon from '@/assets/arrow-left.svg?react';
import ArrowRightIcon from '@/assets/arrow-right.svg?react';
import { DIRECTION, useSliderLogic } from '@/hooks/useSliderLogic';

import { CardSlider } from '../CardSlider';
import s from './PlantTypesSlider.module.scss';

type PlantTypesSliderProps = {
  handleSelectPlant: (plant: string) => void;
};

export const PlantTypesSlider = ({ handleSelectPlant }: PlantTypesSliderProps) => {
  const { handleScroll, plantsTypeList, sliderRef, isLeftDisabled, isRightDisabled } =
    useSliderLogic();

  return (
    <section className={s.sliderContainer}>
      <h2 className={s.sectionTitle}>Plant types</h2>

      <div className={s.sliderWrapper}>
        <button
          type="button"
          disabled={isLeftDisabled}
          className={clsx(s.arrowBtn, s.arrowLeft, { [s.disabled]: isLeftDisabled })}
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
          disabled={isRightDisabled}
          className={clsx(s.arrowBtn, s.arrowRight, { [s.disabled]: isRightDisabled })}
          onClick={() => handleScroll(DIRECTION.right)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};
