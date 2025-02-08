const countries = [
  { name: "Country A", population: 1000000 },
  { name: "Country B", population: 2000000 },
  { name: "Country C", population: 3000000 },
  { name: "Country D", population: 4000000 },
  { name: "Country E", population: 5000000 },
];

// function to calculate total population of all countries in the array of objects and return the total population
function calculateTotalPopulation(countries) {
  let total = 0;
  for (let country of countries) {
    total += country.population;
  }
  return total;
}

const totalPopulation = calculateTotalPopulation(countries);
console.log(totalPopulation); // Output: 15000000
