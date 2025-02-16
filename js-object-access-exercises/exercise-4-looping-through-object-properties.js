// Create an object student with the properties
const student = {
    name: "Alice",
    grade: "A",
    subject: "Mathematics",
    year: "Sophomore",
};

// Function to print each key and its corresponding value
function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

// Call the function with the student object to test it
printObjectProperties(student);
