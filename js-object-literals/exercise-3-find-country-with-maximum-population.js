const countries = [
  { name: "Country A", population: 5000000 },
  { name: "Country B", population: 10000000 },
  { name: "Country C", population: 7500000 },
  { name: "Country D", population: 2000000 },
  { name: "Country E", population: 15000000 },
  { name: "Country F", population: 3000000 },
  { name: "Country G", population: 12000000 },
  { name: "Country H", population: 8000000 },
  { name: "Country I", population: 6000000 },
  { name: "Country J", population: 4000000 },
];

function getMaxPopulationCountry(arrayOfCountries) {
  let countryWithMaxPopulation = arrayOfCountries[0];

  for (let i = 1; i < arrayOfCountries.length; i++) {
    if (arrayOfCountries[i].population > countryWithMaxPopulation.population) {
      countryWithMaxPopulation = arrayOfCountries[i];
    }
  }

  return countryWithMaxPopulation; 
}

console.log(getMaxPopulationCountry(countries)); // { name: 'Country E', population: 15000000 }
