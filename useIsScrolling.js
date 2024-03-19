import { useEffect, useState } from "react";

function useScroll() {
  const [isScrolling, setIsScrolling] = useState(false);
  function handleScroll() {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolling;
}

export default useScroll;
