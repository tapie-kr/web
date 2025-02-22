import { useCallback, useState } from 'react';

export function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn(prev => !prev), []);

  return [on, toggle] as const;
}
