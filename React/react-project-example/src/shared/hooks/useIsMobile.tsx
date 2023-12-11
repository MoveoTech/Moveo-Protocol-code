import { useEffect, useMemo, useState } from 'react';

export const DEFAULT_MOBILE_WIDTH = 800;
export const useIsMobile = (mobileWidth = DEFAULT_MOBILE_WIDTH) => {
  const [width, setWidth] = useState(DEFAULT_MOBILE_WIDTH);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);
      return () => window.removeEventListener('resize', handleWindowSizeChange);
    }
    return undefined;
  }, []);

  return useMemo(() => {
    return width <= mobileWidth;
  }, [mobileWidth, width]);
};
