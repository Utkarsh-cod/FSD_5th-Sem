const student = {
  name: "Utag",
  age: 20,
  id: 12345,
};
const { name, age, id } = student;
const nextstudent = {
  ...student,
  address: {
    street: "Crossing Republic",
    city: "Ghaziabad",
    state: "UP",
  },
};
console.log("student =", student);
console.log("nextstudent =", nextstudent);
