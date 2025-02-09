// First, create a variable 'meteorites' which requires the meteorites.json file
const meteorites = require("./meteorites.json"); // Load JSON file

// Function to print meteorite names
function printMeteoriteNames(data) {
    data.forEach((meteorite) => {
        console.log(meteorite.name);
    });
}

// Call the function
printMeteoriteNames(meteorites);
