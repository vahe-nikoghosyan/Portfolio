
import { useEffect, useState } from "react";

export default function useDebounce(value, delay, minLength) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (minLength && value && value.toString().length < minLength) {
        setDebouncedValue("");
        return;
      }
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, minLength]);

  return debouncedValue;
}