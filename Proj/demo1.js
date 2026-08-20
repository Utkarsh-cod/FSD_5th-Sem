// Array Destructuring
const num = [1, 2, 3, 4, 5];

const [b, c] = num;

console.log("b =", b);
console.log("c =", c);

// Object
const student = {
    name: "Rika",
    age: 26,
    branch: "AIML"
};

// Normal way
const name1 = student.name;
const age1 = student.age;
const branch1 = student.branch;

console.log("\nWithout Destructuring:");
console.log(name1);
console.log(age1);
console.log(branch1);

// Object Destructuring
const { name, age, branch } = student;

console.log("\nWith Destructuring:");
console.log(name);
console.log(age);
console.log(branch);