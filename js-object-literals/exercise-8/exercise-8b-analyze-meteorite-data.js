const meteorites = require("./meteorites.json"); // Load JSON file

// Function to find the biggest and smallest meteorites by mass
function getBiggestAndSmallestMeteorites(data) {
  let validMeteorites = data.filter((m) => m.mass && !isNaN(m.mass));

  // If no valid meteorites found, return this message
  if (validMeteorites.length === 0) {
    console.log("NO VAILD MASS DATA FOUND IN METEORITES.");
    return;
  }

  // Find the biggest meteorite
  let biggest = validMeteorites.reduce((max, m) => parseFloat(m.mass) > parseFloat(max.mass) ? m : max);
  // Find the smallest meteorite
  let smallest = validMeteorites.reduce((min, m) => parseFloat(m.mass) < parseFloat(min.mass) ? m : min);

  // Print the results
  console.log("Biggest Meteorite: " + biggest.name + ", Mass: " + biggest.mass + "g");
  console.log("Smallest Meteorite: " + smallest.name + ", Mass: " + smallest.mass + "g");
}

// Function to find the biggest meteorite from a given decade
function getBiggestMeteoriteByDecade(data, decade) {
  // Filter meteorites by the given decade
  let filteredMeteorites = data.filter((m) => parseInt(m.year) >= decade && parseInt(m.year) < decade + 10 && m.mass && !isNaN(m.mass));

  // If no meteorites found for the given decade, return this message
  if (filteredMeteorites.length === 0) {
    console.log("NO METEORITES FOUND FOR THE DECADE " + decade + "'s.");
    return;
  }

  // Find the biggest meteorite
  let biggestMeteorite = filteredMeteorites.reduce((max, meteorite) => parseFloat(meteorite.mass) > parseFloat(max.mass) ? meteorite : max);

  console.log("Biggest Meteorite in " + decade + "'s: " + biggestMeteorite.name + ", Mass: " + biggestMeteorite.mass + "g, Year: " + biggestMeteorite.year);
}

console.log("\n📌 Biggest & Smallest Meteorites:");
getBiggestAndSmallestMeteorites(meteorites);

console.log("\n📌 Biggest Meteorite from the 1990s:");
getBiggestMeteoriteByDecade(meteorites, 1990);
