import clsx from 'clsx';

import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, onClick, className, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} className={clsx(s.button, className)} type={type} {...rest}>
      {children}
    </button>
  );
};
