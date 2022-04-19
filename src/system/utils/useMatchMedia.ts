/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

export function useMatchMedia(mediaQuery: string): boolean {
  const [matched, setMatched] = useState<boolean>();
  const handleOnChange = useCallback((event: MediaQueryListEvent) => {
    setMatched(event.matches);
  }, []);

  useEffect(() => {
    setMatched(window?.matchMedia(mediaQuery)?.matches);
  }, []);

  useEffect(() => {
    window?.matchMedia(mediaQuery).addEventListener('change', handleOnChange);

    return () => {
      window?.matchMedia(mediaQuery).removeEventListener('change', handleOnChange);
    };
  }, [handleOnChange, mediaQuery]);

  return Boolean(matched);
}
