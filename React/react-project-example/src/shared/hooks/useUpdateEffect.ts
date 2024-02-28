import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useUpdateEffect(fn: () => void, inputs: any[]) {
  const isMountingRef = useRef(false);

  useEffect(() => {
    if (isMountingRef.current) {
      fn();
    } else {
      isMountingRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...inputs]);
}
