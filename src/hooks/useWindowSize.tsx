import { debounce } from '@/utils/debounce';
import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    const updateSize = debounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    }, 500);

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};

export default useWindowSize;
