//Spread operator using array
const hobbies = ["Reading", "Teaching"]
const newHobbies = ["Cooking"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

//Spread operator using object
const user = {
    name: "Michael",
    age: 29
};

const extendedUser = {
    admin: true,
    ...user
}

console.log(extendedUser);
