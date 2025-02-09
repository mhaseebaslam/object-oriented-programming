// Solition # 1

// Create a function that takes an array of countries and returns an array of the country codes.
const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  // Add more countries as needed
];

function getCountryCodes(countriesArray) {
  return countriesArray.map((country) => country.code);
}

const countryCodes = getCountryCodes(countries);
console.log(countryCodes); // Output: ['AF', 'AL', 'DZ', 'AD', 'AO']

// Solution # 2

// Create a function that takes an array of countries and returns an array of the country codes.
function getCountryCodes(countryArray) {
  let resultArrayOfCountryCodes = [];

  for (let i = 0; i < countryArray.length; i++) {
    resultArrayOfCountryCodes.push(countryArray[i].code);
  }

  return resultArrayOfCountryCodes;
}

console.log(getCountryCodes(countries)); // Output: ['AF', 'AL', 'DZ', 'AD', 'AO']
