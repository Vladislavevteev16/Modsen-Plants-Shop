import s from './SocialLink.module.scss';

type SocialLinkProps = {
  Icon: React.ElementType;
  href?: string;
};

export const SocialLink = ({ Icon, href }: SocialLinkProps) => {
  return (
    <a className={s.link} href={href}>
      <Icon className={s.icon} />
    </a>
  );
};
