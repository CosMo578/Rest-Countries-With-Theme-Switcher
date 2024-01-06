import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { countries } from "/data.js";
import { useEffect, useState } from "react";

export const CountryDetails = () => {
  const params = useParams();
  const name = params.name;

  const [Country, setCountry] = useState([]);

  useEffect(() => {
    const currentCountry = countries.find(
      (country) => country.name.toLowerCase() === name,
    );
    setCountry(currentCountry);
  }, [Country, name]);

  return (
    <div className="pt-12 px-8 h-full md:px-10">
      <Link
        to="/"
        className="rounded-lg py-4 px-6 font-semibold shadow-xl dark:bg-dark-ele mb-10"
      >
        <span className="mr-4 inline-block align-middle text-xl">
          <BsArrowLeft />
        </span>
        Back
      </Link>
      {Country ? (
        <section key={name} className="flex flex-col items-start md:flex-row mt-16">
          <div className="md:w-2/5 aspect-video">
            <img
              src={Country.flags ? Country.flags.svg : "gg"}
              alt="Error Image"
              className="h-auto w-auto object-center object-fill"
            />
          </div>
          <div className="lg:ml-auto">
            <h2 className="mb-6 block text-3xl font-extrabold">
              {Country.name}
            </h2>
            <ul className="mb-12 flex flex-col items-start gap-10 leading-8 md:flex-row">
              <span>
                <li>
                  Native Name:{" "}
                  <span className="font-light">{Country.nativeName}</span>{" "}
                </li>
                <li>
                  Population:{" "}
                  <span className="font-light">
                    {" "}
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
                  <span className="font-light">{Country.currencies ? Country.currencies[0]?.name : "this"}</span>
                  
                </li>

                <li>
                  {/* `${Country.languages[0]?.name}, ${Country.languages[1]?.name}, ${Country.languages[2]?.name}, ${Country.languages[4]?.name} ` */}
                  Languages:{" "}
                  {Country.languages
                    ? Country.languages.forEach((item) => {
                        return `${item.name}`;
                      })
                    : ""}
                </li>
              </span>
            </ul>

            <span className="flex flex-col justify-start md:flex-row md:items-center">
              <span className="inline-block md:mr-6 ">Border Countries:</span>

              <ul className="flex-wrap">
                <li className="mb-4 mr-4 inline-block rounded-sm px-6 py-2 font-light shadow-2xl md:mb-0 dark:bg-dark-ele">
                  France
                </li>
                <li className="mb-4 mr-4 inline-block rounded-sm px-6 py-2 font-light shadow-2xl md:mb-0 dark:bg-dark-ele">
                  Germany
                </li>
                <li className="mb-4 mr-4 inline-block rounded-sm px-6 py-2 font-light shadow-2xl md:mb-0 dark:bg-dark-ele">
                  Netherlads
                </li>
              </ul>
            </span>
          </div>
        </section>
      ) : (
        "lost"
      )}
    </div>
  );
};
