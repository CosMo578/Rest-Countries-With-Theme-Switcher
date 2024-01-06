/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";

export function InputSearch({ value, setValue }) {
  return (
    <form action="post" className="relative md:w-[40%]">
      <span className=" absolute left-[3%] top-[30%] text-2xl text-gray-500 dark:text-current">
        <BsSearch />
      </span>
      <input
        className="dark:bg-dark-ele mb-12 mt-6 w-full rounded-md border-2 border-transparent p-5 pl-16 shadow-lg focus:border-sky-500 focus:outline-none md:inline-block"
        type="text"
        id="search"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}
