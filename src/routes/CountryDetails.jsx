import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { countries } from "/data.js";
import { useEffect, useState } from "react";

export const CountryDetails = () => {
  const params = useParams();
  const name = params.name;

  function findBorder(border) {
    let borderCountry = countries.find(
      (country) => country.alpha3Code === border,
    );
    return borderCountry;
  }

  const [Country, setCountry] = useState([]);

  useEffect(() => {
    const currentCountry = countries.find(
      (country) => country.name.toLowerCase() === name,
    );
    setCountry(currentCountry);
  }, [Country, name]);

  return (
    <div className="px-8 pt-12 md:overflow-y-hidden md:px-10">
      <Link
        to="/"
        className="mb-10 rounded-lg px-6 py-4 font-semibold shadow-xl dark:bg-dark-ele"
      >
        <span className="mr-4 inline-block align-middle text-xl">
          <BsArrowLeft />
        </span>
        Back
      </Link>
      {Country ? (
        <section className="mt-16 gap-10 lg:flex">
          <img
            src={Country.flags ? Country.flags.svg : "Not Found"}
            alt="Error Loading Image"
            className="mb-10 h-auto w-full md:h-[400px] lg:mb-0 lg:w-1/2"
          />

          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 block text-3xl font-extrabold">
              {Country.name}
            </h2>

            <ul className="mb-8 flex flex-col items-start gap-10 leading-8 md:flex-row">
              <span>
                <li>
                  Native Name:{" "}
                  <span className="font-light">{Country.nativeName}</span>{" "}
                </li>
                <li>
                  Population:{" "}
                  <span className="font-light">
                    {new Intl.NumberFormat().format(Country.population)}
                  </span>{" "}
                </li>
                <li>
                  Region: <span className="font-light">{Country.region}</span>
                </li>
                <li>
                  Sub Region:{" "}
                  <span className="font-light">{Country.subregion}</span>
                </li>
                <li>
                  Capital: <span className="font-light">{Country.capital}</span>
                </li>
              </span>
              <span>
                <li>
                  Top Level Domain:{" "}
                  <span className="font-light">{Country.topLevelDomain}</span>
                </li>

                <li>
                  Currencies:{" "}
                  <span className="font-light">
                    {Country.currencies ? Country.currencies[0]?.name : "this"}
                  </span>
                </li>

                <li>
                  Languages:{" "}
                  {Country.languages
                    ? Country.languages.map((language, index) => {
                        return (
                          <span key={language}>
                            {language.name}
                            {index < Country.languages.length - 1 ? ", " : ""}
                          </span>
                        );
                      })
                    : "No Languages"}
                </li>
              </span>
            </ul>

            <ul>
              <p className="mb-6 mr-6 md:mb-0 md:inline-block lg:h-full">
                Border Countries:
              </p>
              {Country.borders
                ? Country.borders.map((border, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/country/${findBorder(
                          border,
                        )?.name.toLowerCase()}`}
                      >
                        <li className="mb-3 mr-3 inline-block rounded-sm px-5 py-1.5 font-light shadow-lg dark:bg-dark-ele">
                          {border}
                        </li>
                      </Link>
                    );
                  })
                : "No Borders..."}
            </ul>
          </div>
        </section>
      ) : (
        <p className="mt-[15%] text-center text-4xl">Not Found</p>
      )}
    </div>
  );
};
