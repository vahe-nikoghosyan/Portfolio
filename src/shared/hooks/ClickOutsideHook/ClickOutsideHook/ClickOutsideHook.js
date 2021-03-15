
import { useEffect, useState } from "react";

function useOutsideClick(ref) {
  const [isOutside, setOutside] = useState(false);

  const handleClickOutside = (event) => {
    setOutside(!!ref.current && !ref.current.contains(event.target));
  };

  const setOutsideValue = () => {
    setOutside(!isOutside);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return { isOutside, setOutsideValue };
}

export default useOutsideClick;