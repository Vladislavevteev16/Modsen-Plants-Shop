import s from './QuantityControl.module.scss';

type QuantityControlProps = {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

export const QuantityControl = ({
  quantity,
  handleIncrement,
  handleDecrement,
}: QuantityControlProps) => {
  return (
    <div className={s.counterConatainer}>
      <button type="button" className={s.minusBtn} onClick={handleDecrement}>
        −
      </button>
      <span className={s.quantityValue}>{quantity}</span>
      <button type="button" className={s.plusBtn} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
