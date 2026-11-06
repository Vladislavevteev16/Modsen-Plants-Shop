import { useEffect, useState } from 'react';

const CHECK_MOBILE_VALUE = 1024;

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < CHECK_MOBILE_VALUE);
    };

    handleResize();
    addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};
