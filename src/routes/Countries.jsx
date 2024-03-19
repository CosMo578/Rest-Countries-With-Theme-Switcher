/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { countries } from "/data.js";
import { ScrollButton } from "../components/ScrollButton";
import { InputSearch } from "../components/InputSearch";
import { SelectDropDown } from "../components/SelectDropDown";

export function Countries() {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filtered = countries
      ?.filter((item) => {
        return value.toLowerCase() === ""
          ? "Not Found"
          : item.name.toLowerCase().includes(value.toLowerCase().trim());
      })
      .filter((country) => {
        if (select === "All") {
          return true;
        } else {
          return country.region.toLowerCase() === select.toLowerCase();
        }
      });

    setFilteredCountries(filtered);
  }, [select, value]);

  return (
    <>
      <ScrollButton />
      <article className="p-10">
        <section className="md:flex md:items-center md:justify-between">
          <InputSearch value={value} setValue={setValue} />
          <SelectDropDown select={select} setSelect={setSelect} />
        </section>

        <main
          id="countries"
          className="countries mt-6 box-border grid max-w-[100vw] gap-12"
        >
          {filteredCountries.map((country) => {
            return (
              <Link
                key={country.name}
                to={`/country/${country.name.toLowerCase()}`}
                className="relative max-w-full overflow-hidden rounded-lg bg-[#ffffff] shadow-2xl dark:bg-dark-ele"
              >
                <img
                  className="aspect-video h-auto min-h-[200px] w-full object-cover object-center"
                  src={country.flags.svg}
                  alt="image not found"
                  loading="lazy"
                />
                <div className="p-8">
                  <h2 className="mb-3 text-lg font-semibold">{country.name}</h2>

                  <ul>
                    {[
                      `Population: ${new Intl.NumberFormat().format(
                        country.population,
                      )}`,
                      `Region: ${country.region}`,
                      `Capital: ${country.capital}`,
                    ].map((item) => {
                      return (
                        <li key={item} className="mb-3">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Link>
            );
          })}
        </main>
      </article>
    </>
  );
}
