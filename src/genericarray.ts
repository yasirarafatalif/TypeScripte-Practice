
// normal array
const arry: string[] = ["a", "b", "c"];
const numArray: number[] = [1, 2, 3, 4, 5];


// generic array
const array1: Array<string> = ["a", "b", "c"];
const numArray1: Array<number> = [1, 2, 3, 4, 5];

type GenericArray<value> =  Array<value>
const array2: GenericArray<string> = ["a", "b", "c"];
const numArray2: GenericArray<number> = [1, 2, 3, 4, 5];
console.log(numArray1)
console.log(numArray2)