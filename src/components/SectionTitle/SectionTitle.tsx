import clsx from 'clsx';

import s from './SectionTitle.module.scss';

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className={clsx(s.title, s.withLine)}>{children}</h2>;
};
