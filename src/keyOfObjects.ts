type Obj ={
    name: 'John',
    age: 30,
    city: 'New York'
}

type ObjKeys = keyof Obj; // 'name' | 'age' | 'city'

const key: ObjKeys = 'age'; // valid
// console.log(key)

const user ={
    name: 'John',
    age: 30,
    city: 'New York'
}
// const name = user.name;
const name = user['name']; // using bracket notation
const age = user['age']; // using bracket notation
const city = user['city']; // using bracket notation
type User={
    name: string,
    age: number,
    city: string
}
type Products={
    id: number,
    name: string,
    price: number
}

const createKeyOfObject = <X>(obj: X , key: keyof X) => {
    return obj[key];
};
console.log(createKeyOfObject({name:"alif", age: 25, city: "Los Angeles"}, "age"))
console.log(createKeyOfObject({id:22,name:"alif",price: 22},"name"))
// console.log(name)
// console.log(age)
// console.log(city)