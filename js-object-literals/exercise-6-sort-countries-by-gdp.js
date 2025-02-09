const countries = [
    { name: 'USA', gdp: 21433226 },
    { name: 'China', gdp: 14342903 },
    { name: 'Japan', gdp: 5081770 },
    { name: 'Germany', gdp: 3845630 },
    { name: 'India', gdp: 2875142 },
    { name: 'UK', gdp: 2827113 },
    { name: 'France', gdp: 2715518 },
    { name: 'Italy', gdp: 2001174 },
    { name: 'Brazil', gdp: 1839758 },
    { name: 'Canada', gdp: 1647126 }
];

function sortCountriesByGDP(countries) {
    countries.sort((a, b) => b.gdp - a.gdp);

    countries.forEach(country => {
        console.log('The GDP of ' + country.name + ' is ' + country.gdp);
    });
}

sortCountriesByGDP(countries);
