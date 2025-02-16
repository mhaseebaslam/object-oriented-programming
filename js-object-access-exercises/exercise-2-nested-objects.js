// Exercise 2: Nested Objects

// Create an object company with the properties
const company = {
  name: "TechCorp",
  location: "San Francisco",
  employeesCount: 100,
  details: {
    CEO: "Jane Smith",
    CTO: "Mike Brown",
  },
};

// Access and print the name of the company
console.log(company.name); // TechCorp

// Access and print the number of employees
console.log(company.employeesCount); // 100

// Access and print the name of the CTO
console.log(company.details.CTO); // Mike Brown
