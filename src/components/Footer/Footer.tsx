import FacebookIcon from '@/assets/facebook-icon.svg?react';
import InstagramIcon from '@/assets/instagram-icon.svg?react';
import TwitterIcon from '@/assets/twitter-icon.svg?react';

import { Logo } from '../ui/Logo';
import { SocialLink } from '../ui/SocialLink';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <Logo />
        <div className={s.links}>
          <SocialLink Icon={FacebookIcon} />
          <SocialLink Icon={TwitterIcon} />
          <SocialLink Icon={InstagramIcon} />
        </div>
        <div className={s.copyright}>
          <p>© 2026 Plan A Plant</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
