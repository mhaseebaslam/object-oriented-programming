// Create an array of countries. Each country should have a name, population, and an array of the names of its largest cities. The largest cities array should contain objects with the name of the city and the population of the city.
const countries = [
  {
    name: "Belgium",
    population: 11589623,
    largestCities: [
      { name: "Antwerp", population: 523248 },
      { name: "Ghent", population: 260341 },
      { name: "Charleroi", population: 201816 },
      { name: "Liège", population: 197355 },
      { name: "Brussels", population: 185103 },
    ],
  },
  {
    name: "France",
    population: 65273511,
    largestCities: [
      { name: "Paris", population: 2140526 },
      { name: "Marseille", population: 861635 },
      { name: "Lyon", population: 515695 },
      { name: "Toulouse", population: 479553 },
      { name: "Nice", population: 342522 },
    ],
  },
  {
    name: "Germany",
    population: 83783942,
    largestCities: [
      { name: "Berlin", population: 3644826 },
      { name: "Hamburg", population: 1841179 },
      { name: "Munich", population: 1471508 },
      { name: "Cologne", population: 1085664 },
      { name: "Frankfurt", population: 753056 },
    ],
  },
];

function printCountryInfo(countries) {
  countries.forEach((country) => {
    // Calculate the total population of the largest cities
    let totalCityPopulation = 0;

    // Loop through the largest cities and add their population to the totalCityPopulation
    country.largestCities.forEach((city) => {totalCityPopulation += city.population;});

    // Calculate the percentage of the total population that lives in the largest cities
    let percentage = ((totalCityPopulation / country.population) * 100).toFixed(2);

    // Print the country information
    console.log("Country: " + country.name);

    // Print the total population of the country
    console.log("Total Population: " + country.population);

    // Print the largest cities of the country
    console.log("Largest Cities:");

    // Loop through the largest cities and print their name and population
    country.largestCities.forEach((city) => {console.log(" - " + city.name + " : " + city.population);});

    // Print the total population of the largest cities
    console.log("Total Population in Largest Cities: " + totalCityPopulation);

    // Print the percentage of the total population that lives in the largest cities
    console.log("Percentage of Population in Largest Cities: " + percentage + "%");

    // Print a separator
    console.log("---");
  });
}

// Call the function and pass the countries array
printCountryInfo(countries);
