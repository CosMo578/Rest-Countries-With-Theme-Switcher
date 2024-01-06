import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export function Header() {
  const [theme, setTheme] = useState("Dark Mode");
  const element = document.documentElement;
  // const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // function windowMatch() {
  //   if (
  //     localStorage.theme === "dark" ||
  //     !("theme" in localStorage && darkQuery.matches)
  //   ) {
  //     element.classList.add("dark");
  //   } else {
  //     element.classList.remove("dark");
  //   }
  // }
  // windowMatch();

  useEffect(() => {
    switch (theme) {
      case "Dark Mode":
        element.classList.add("dark");
        localStorage.setItem("theme", "Dark");
        break;
      case "Light Mode":
        element.classList.remove("dark");
        localStorage.setItem("theme", "Light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element.classList, theme]);

  return (
    <header className="dark:bg-dark-ele sticky top-0 z-10 flex items-center justify-between bg-[#ffffff] px-6 py-10 shadow-lg md:p-8 dark:text-white">
      <h1 className="font-semibold md:text-2xl">Where in the world?</h1>

      <ul>
        {theme === "Dark Mode" ? (
          <li
            onClick={() => setTheme("Light Mode")}
            className="mr-4 inline-block cursor-pointer align-middle md:text-xl"
          >
            <BsMoonStarsFill />
          </li>
        ) : (
          <li
            onClick={() => setTheme("Dark Mode")}
            className="mr-4 inline-block cursor-pointer align-middle md:text-xl"
          >
            <BsSunFill />
          </li>
        )}
        <li className="inline-block font-semibold">{theme}</li>
      </ul>
    </header>
  );
}
