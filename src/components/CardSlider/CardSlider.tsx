import s from './CardSlider.module.scss';

type CardSliderProps = {
  title: string;
  image: string;
  typeValue: string;
  handleSelectPlant: (plantType: string) => void;
};

export const CardSlider = ({ title, image, typeValue, handleSelectPlant }: CardSliderProps) => {
  return (
    <div className={s.slideItem} onClick={() => handleSelectPlant(typeValue)}>
      <div className={s.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <span className={s.title}>{title}</span>
    </div>
  );
};
