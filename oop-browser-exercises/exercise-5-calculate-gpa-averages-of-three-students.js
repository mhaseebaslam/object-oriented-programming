// Solution # 1 in solition 1 we have an object of students and their grades and we have a function to calculate the GPA of each student and print it.

// Student data
const students = {
  Joe: { math: 3.5, science: 4.0, history: 3.0 },
  Lisa: { math: 4.0, science: 3.5, history: 3.5 },
  Max: { math: 3.0, science: 3.0, history: 4.0 },
};

// Function to calculate GPA
function calculateGPA(grades) {
  let total = 0;
  let count = 0;
  for (let grade in grades) {
    total += grades[grade];
    count++;
  }
  return total / count;
}

// Calculate and print GPA for each student
for (let student in students) {
  const gpa = calculateGPA(students[student]);
  console.log(student + "'s grades:", students[student]);
  console.log(student + "'s GPA:", gpa.toFixed(2));
}

// Solution # 2 in solution 2 we have a function to calculate the GPA of each student and print it.

// Joe's grades
const joePhysics = 4;
const joeMathPrimer = 3;
const joeIntroToProgramming = 2;

// Lisa's grades
const lisaEngineeringEnglish = 4;
const lisaMathPrimer = 2;

// Max's grades
const maxObjectOrientedProgramming = 5;
const maxEngineeringEngligh = 5;
const maxAdvancedPhysics = 2;

// Calculate GPA
const joeGrades = [joePhysics, joeMathPrimer, joeIntroToProgramming];
const lisaGrades = [lisaEngineeringEnglish, lisaMathPrimer];
const maxGrades = [maxEngineeringEngligh, maxObjectOrientedProgramming, maxAdvancedPhysics,];

// Function to calculate GPA
function avgCalculator(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  let average = sum / values.length;
  return average;
}

// Print GPA
console.log("GPA of joe is " + avgCalculator(joeGrades));
console.log("GPA of lisa is " + avgCalculator(lisaGrades));
console.log("GPA of max is " + avgCalculator(maxGrades));
