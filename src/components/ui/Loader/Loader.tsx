import clsx from 'clsx';

import LoaderIcon from '@/assets/loader-icon.svg?react';

import s from './Loader.module.scss';

type LoaderProps = {
  isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderProps) => {
  return <LoaderIcon className={clsx(s.loader, { [s.loading]: isLoading })} />;
};
