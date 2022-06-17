import { RefObject, useEffect } from 'react';

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOnClickOutside;
