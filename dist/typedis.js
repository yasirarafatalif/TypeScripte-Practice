"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
    name: {
        firstName: "John",
        middelName: "Doe",
        lastName: "Smith"
    }
};
const { name: { firstName, middelName, lastName }, age, address: { city, country } } = user;
console.log(firstName, middelName, lastName, age, city, country);
const addFucntion = (a, b) => {
    return a + b;
};
console.log(addFucntion(1, 3));
//# sourceMappingURL=typedis.js.map