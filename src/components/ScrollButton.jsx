/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import useScroll from "/useScroll";
import { BsArrowUp } from "react-icons/bs";

export function ScrollButton() {
  const isScrolling = useScroll();
  function scrollTop() {
    scrollTo({
      top,
      behavior: "smooth",
    });
  }
  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.span
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
            },
            animate: {
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
              },
              exit: {
                scale: 0,
                opacity: 0,
              },
            },
          }}
          className={`fixed bottom-10 right-10 z-10 cursor-pointer rounded-full border-2 border-sky-500 bg-white p-5 text-3xl font-black md:text-2xl dark:bg-dark-ele dark:text-white`}
          onClick={() => scrollTop()}
        >
          <BsArrowUp />
        </motion.span>
      ) : (
        ""
      )}{" "}
    </AnimatePresence>
  );
}
