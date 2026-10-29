import FacebookIcon from '@/assets/facebook-icon.svg?react';
import InstagramIcon from '@/assets/instagram-icon.svg?react';
import TwitterIcon from '@/assets/twitter-icon.svg?react';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/ui/Loader';
import { Logo } from '@/components/ui/Logo';
import { SocialLink } from '@/components/ui/SocialLink';

const typeList: ['all', 'categories', 'sale'] = ['all', 'categories', 'sale'];

export const HomePage = () => {
  return (
    <main
      style={{
        padding: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 50,
        flexWrap: 'wrap',
      }}
    >
      <div>
        {typeList.map((type) => (
          <Accordion key={type} type={type} />
        ))}
      </div>
      <div
        style={{
          width: 344,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Button>Buy</Button>
        <Button disabled>Shop Now</Button>
      </div>
      <Loader isLoading />
      <Logo />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <SocialLink Icon={InstagramIcon} />
        <SocialLink Icon={TwitterIcon} />
        <SocialLink Icon={FacebookIcon} />
      </div>
    </main>
  );
};
