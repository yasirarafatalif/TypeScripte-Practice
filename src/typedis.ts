type User = {
    name: {
    firstName: string;
    middelName: string;
    lastName: string;
  };
  age: number;
  address: {
    city: string;
    country: string;
  };
}
const user: User = {
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
const {name:{firstName,middelName,lastName},age,address:{city,country}}= user 
console.log(firstName,middelName,lastName,age,city,country)

type add = (a: number, b: number) => number;
const addFucntion: add = (a: number, b: number): number => {
    return a + b;
}
console.log(addFucntion(1,3))