import salaryImage from './discount-sticker-image.png';
import s from './DiscountSticker.module.scss';

type DiscountStickerProps = {
  discountValue: string;
};

export const DiscountSticker = ({ discountValue }: DiscountStickerProps) => {
  return (
    <div className={s.stickerContainer}>
      <img src={salaryImage} alt="discount sticker" className={s.stickerImage} />
      <span className={s.stickerText}>
        {discountValue}
        <br />
        off
      </span>
    </div>
  );
};
