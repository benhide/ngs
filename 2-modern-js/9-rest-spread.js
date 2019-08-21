const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log("This is in the first var " + first);
// restOfItems.forEach(item => console.log("These are in the rest of item array still: " + item));

const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe"
};

const { temp1, temp2, ...person } = data;

console.log(temp1);
console.log(temp2);
console.log(person);

const newArray = [...restOfItems];

console.log(newArray);

const newObject = {
  ...person
};
