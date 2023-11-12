import { useEffect, useState } from "react";

export default function CountriesData() {
  // const [searchTerm, setSearchTerm] = useState(""); build search terms for later
  const [fetchedData, setFetchedData] = useState("");
  const [countryDataBeautify, setCountryDataBeautify] = useState("");
  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log(data);

        setCountryDataBeautify(
          fetchedData.map((item) => {
            return (
              <div
                key={item.alpha3Code}
                style={{ margin: "5px", border: "1px solid black" }}
              >
                <img src={item.flag} width={200} height={100} alt="" />
                <p>Country: {item.name}</p>
                <p>Capital: {item.capital}</p>
                {/* this is for smth else */}
                <p>Population: {item.population}</p>
                <div style={{ display: "flex" }}>
                  Currency:{" "}
                  {item.currencies.map((item) => {
                    return <p key={item.code}>{item.name}</p>;
                  })}
                </div>
              </div>
            );
          })
        );
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>COUNTRIES OF THE WORLD</h1>
      <p>currently, we have {fetchedData.length} countries</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {countryDataBeautify}
      </div>
    </div>
  );
}
