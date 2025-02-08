// Objects for Germany, France, and Sweden
const germany = {
  name: "Germany",
  population: 83166711,
  capital: "Berlin",
  officialLanguage: "German",
};

const france = {
  name: "France",
  population: 67081000,
  capital: "Paris",
  officialLanguage: "French",
};

const sweden = {
  name: "Sweden",
  population: 10379295,
  capital: "Stockholm",
  officialLanguage: "Swedish",
};

// Function to print country name and population
function printCountryInfo(country) {
  console.log("The population of " + country.name + " is " + country.population);
}

// Calling the function for all countries
printCountryInfo(germany);
printCountryInfo(france);
printCountryInfo(sweden);
