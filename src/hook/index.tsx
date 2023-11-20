import { useState, useEffect } from "react";
export function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);
  return debounceValue;
}
