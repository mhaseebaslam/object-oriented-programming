# JS Object Literals

## Table of Contents

- [Introduction to Objects](#introduction-to-objects)
- [Introduction to Objects - Literals](#introduction-to-objects---literals)
  - [Example of a music record with normal primitives](#example-of-a-music-record-with-normal-primitives)
  - [Example of the same data using an object](#example-of-the-same-data-using-an-object)
  - [Read access for an object property using dot notation](#read-access-for-an-object-property-using-dot-notation)
  - [Another example - Car object](#another-example---car-object)
- [Why Objects?](#why-objects)
- [Exercises](#exercises)
  - [Exercise 1: Create Belgium Object](#exercise-1-create-belgium-object)
  - [Exercise 2: Create Objects for Other Countries](#exercise-2-create-objects-for-other-countries)
  - [Exercise 3: Find Country with Maximum Population](#exercise-3-find-country-with-maximum-population)
  - [Exercise 4: Calculate Total Population](#exercise-4-calculate-total-population)
  - [Exercise 5: Get Country Codes](#exercise-5-get-country-codes)
  - [Exercise 6: Sort Countries by GDP](#exercise-6-sort-countries-by-gdp)
  - [Exercise 7: Add Largest Cities to Countries](#exercise-7-add-largest-cities-to-countries)
  - [Exercise 8: Print Meteorite Names](#exercise-8-print-meteorite-names)
  - [Exercise 8b: Analyze Meteorite Data](#exercise-8b-analyze-meteorite-data)

## Introduction to Objects

Individual variables with primitive data types allow you to deal with a small amount of data easily.
When application complexity increases, the demand for more complex data structures also increases.  
An object is, in essence, a collection of variables, each with its own name and individual data type, which can be either one of the primitive types, an object, an array, or a function.  

## Introduction to Objects - Literals

### Example of a music record with normal primitives

```javascript
let albumName = "The Razors Edge";
let songName = "Thunderstruck";
let recorded = "Jan 1990";
let length = "4:52";
let genre = ["Hard rock", "Heavy Metal"];
let songwriters = ["Angus Young", "Malcolm Young"];
let reviewStars = 4;
```

### Example of the same data using an object

```javascript
let songInfo = {
        albumName: "The Razors Edge",
        songName: "Thunderstruck",
        recorded: "Jan 1990",
        length: "4:52",
        genre: ["Hard rock", "Heavy Metal"],
        songwriters: ["Angus Young", "Malcolm Young"],
        reviewStars: 4
};
```

### Read access for an object property using dot notation

```javascript
console.log(songInfo.albumName);
```

### Another example - Car object

```javascript
let car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Blue',
        isRunning: false
};
```

## Why Objects?

- Organization of data
- Encapsulation of data and functionality
- Code reusability
- Consider `String.substring`, `Array.push`, `String.replace`
- Consider similarity between different types of vehicles (e.g., family car, delivery truck, off-road car, heavy cargo truck)

## Exercises

This folder contains the following exercises:

### Exercise 1: Create Belgium Object

Write code that stores information about Belgium in an object. The object information should be stored in a variable named `belgium`.  
Information to be stored:

- **Country:** Belgium  
- **Capital:** Brussels  
- **Languages:** Dutch, French, German  
- **Area:** 30,689 km²  
- **Population:** 11,492,641  
- **GDP per capita:** $50,114  
- **ISO3166 code:** BE  

### Exercise 2: Create Objects for Other Countries

Enhance your Exercise 1 solution by creating objects similar to Belgium for Germany, France, and Sweden (country data available on Wikipedia).  
Next, write a function that prints the name of the country and its population in a string. Example output:

```text
Belgium, population 11492641
```

The function should accept a single parameter (the country object) and be called for all countries.

### Exercise 3: Find Country with Maximum Population

Create an array that holds country objects from Exercises 1 and 2 as its elements. The array should contain the same countries.
Write a function that accepts an array of countries as a parameter and returns the country with the maximum population.

```javascript
function getMaxPopulationCountry(arrayOfCountries) {
        // Implement your solution
        return countryWithMaxPopulation;
}
```

### Exercise 4: Calculate Total Population

Use the same array of countries from Exercise 3. Write a function that calculates and returns the sum of the populations of all countries in the array.

### Exercise 5: Get Country Codes

Use the same array of countries from Exercise 3. Write a function that accepts the array of countries as a parameter and returns a new array containing the country codes.

### Exercise 6: Sort Countries by GDP

Use the same array of countries from Exercise 3. Write a function that orders the countries by their GDP (from highest to lowest) and prints out only the name of the country and its GDP.

**Note:** Implement your own sorting algorithm first before researching existing sorting algorithms. Then, implement a solution using a known sorting algorithm.

### Exercise 7: Add Largest Cities to Countries

Use the same array of countries from Exercise 3. Modify each country object to include a new property called `largestCities`. The value should be an array of objects formatted as follows:

```javascript
{
        name: "Antwerp",
        population: 523248
}
```

Each country should have data for its five biggest cities.
Next, create a function that prints for each country:

- The name of the country
- The total population of the country
- The names and populations of the five biggest cities
- The total population of the five biggest cities
- The percentage of the country's population living in those cities

### Exercise 8: Print Meteorite Names

Take the dataset of Earth meteorite landings from NASA: [NASA Meteorite Landings Dataset](https://data.nasa.gov/resource/y77d-th95.json).  
Create an application that loads the dataset as a JSON file. In Node.js, JSON files can be loaded using:

```javascript
var someObject = require('./somefile.json');
```

Create a function that prints the names of all meteorites.

### Exercise 8b: Analyze Meteorite Data

Use the same dataset as in Exercise 8. Create functions to:

- Get the biggest and smallest meteorites by mass.
- Get the biggest meteorite from a given decade (where the decade is given as a parameter).
