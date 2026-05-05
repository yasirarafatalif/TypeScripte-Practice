
// normal array
const arry: string[] = ["a", "b", "c"];
const numArray: number[] = [1, 2, 3, 4, 5];


// generic array
const array1: Array<string> = ["a", "b", "c"];
const numArray1: Array<number> = [1, 2, 3, 4, 5];

type GenericArray<value> =  Array<value>
const array2: GenericArray<string> = ["a", "b", "c"];
const numArray2: GenericArray<number> = [1, 2, 3, 4, 5];
const stringArray2: GenericArray<string> = ["x", "y", "z"];
const obejctArray2: GenericArray<{ name: string; age: number }> = [
    { name: "Alif", age: 30 },
    { name: "Mezba", age: 25 },
];

console.log(numArray1)
console.log(numArray2)
console.log(stringArray2)
console.log(obejctArray2)