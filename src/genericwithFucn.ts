
// normal function
const addnumber = (num1: number, num2: number): number => {
    return num1 + num2;
}
// console.log(addnumber(5, 10));
const addString = (str1: string[]) => {
    return [str1];
}
// console.log(addString(["Hello", "World"]));


// using generic function with different types of data
const genericFunction = <T>(input: T): T[] => {
    return [input];
}

// console.log(genericFunction(2));
// console.log(genericFunction([{ name: "Alif", age: 30 },{ name: "Mezba", age: 25 }]));



const creategenericwithObject = genericFunction({ name: "Alif", age: 30 });
// console.log(creategenericwithObject)

// using tuple with generic function
const createTuppleWithGeneric=<X, Y> (input1: X, input2: Y)=> [input1, input2] ;

// console.log(createTuppleWithGeneric("alif",true))
// console.log(createTuppleWithGeneric("alif",{ name: "Alif", age: 30 }))

const  createTuppleWithObjebtFucntion= <T>(sutudenInfo: T)=> {
    return {
        course: "TypeScript",
        ...sutudenInfo
    }
}

// console.log(createTuppleWithObjebtFucntion({ name: "Alif", age: 30 }))
// console.log(createTuppleWithObjebtFucntion({ name: "Alif", age: 30 , email: "alif@example.com" , isAdmin: true  }))

const createTuppleWithObjebtFucntion2= <T extends { name: string; age: number }>(sutudenInfo: T)=> {
    return {
        course: "TypeScript",
        ...sutudenInfo
    }
}
console.log(createTuppleWithObjebtFucntion2({ name: "Alif", age: 30 }))
console.log(createTuppleWithObjebtFucntion2({ name: "Alif", age: 30 , email: "alif@example.com" , isAdmin: true  }))