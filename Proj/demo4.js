const student = {
    name: "Rika",
    age: 29,
    branch: "AIML",
    id: 4512
};

const newStudent = {
    ...student,
    address: {
        street1: "Sector 15",
        city: "Noida",
        state: "UP",
        pincode: 201001
    }
};
function main() {
    const { name, age, branch, id } = student;

    console.log("\nUsing Destructuring:");
    console.log(name);
    console.log(age);
    console.log(branch);
    console.log(id);

    // Print the original student
    console.log("\nOriginal Student:");
    console.log(student);

    // Print the new student with address
    console.log("\nNew Student:");
    console.log(newStudent);
}
main();