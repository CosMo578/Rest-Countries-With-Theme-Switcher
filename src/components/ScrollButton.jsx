/* eslint-disable react/prop-types */
import { BsArrowUp } from "react-icons/bs";

export function ScrollButton({ scrollTop }) {
  return (
    <span
      className={` fixed bottom-5 right-8 z-10 rounded-full border-2 border-sky-500 bg-white p-5 text-xl font-black shadow-lg hover:cursor-pointer md:text-2xl dark:bg-dark-ele dark:text-white`}
      onClick={() => scrollTop()}
    >
      <BsArrowUp />
    </span>
  );
}
