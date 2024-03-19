import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const rootClass = document.documentElement.classList;

  useEffect(() => {
    if (isDark) {
      rootClass.add("dark");
    } else {
      rootClass.remove("dark");
    }
  }, [rootClass, isDark]);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-[#ffffff] px-6 py-10 shadow-lg md:p-8 dark:bg-dark-ele dark:text-white">
      <h1 className="font-semibold md:text-2xl">Where in the world?</h1>
      <ul>
        <button
          className="flex items-center gap-3"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark === true ? (
            <>
              <BsSunFill />
              <p>Light Mode</p>
            </>
          ) : (
            <>
              <BsMoonStarsFill />
              <p>Dark Mode</p>
            </>
          )}
        </button>
      </ul>
    </header>
  );
}
