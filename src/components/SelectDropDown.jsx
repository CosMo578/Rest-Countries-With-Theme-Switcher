/* eslint-disable react/prop-types */
export function SelectDropDown({ select, setSelect }) {
  return (
    <>
      <select
        id="select"
        className="dark:bg-dark-ele rounded-lg border-2 border-transparent bg-white px-12 py-5 text-left shadow-lg hover:cursor-pointer focus:border-sky-500"
        value={select}
        name="Filter by Region"
        placeholder="Filter by Region"
        onChange={(e) => setSelect(e.target.value)}
      >
        {[
          {
            text: "All",
          },
          {
            text: "Africa",
          },
          {
            text: "Americas",
          },
          {
            text: "Asia",
          },
          {
            text: "Europe",
          },
          {
            text: "Oceania",
          },
        ]?.map((name) => {
          return (
            <option
              key={Math.random()}
              onClick={() => {
                setSelect(name.text);
              }}
              value={name.text}
            >
              {name.text}
            </option>
          );
        })}
      </select>
    </>
  );
}
