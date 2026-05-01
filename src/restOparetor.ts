
const allusers =((...fridens:string[])=>{
    console.log(fridens)
    fridens.forEach((friend)=>{
        console.log(`this is my friend ${friend}`);
    })
   
})
allusers("friend1","friend2","friend3", "")

// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [4, 5, 6];
// arr1.push(10);

// const arr: number[] = [...arr1, ...arr2];
// console.log(arr);
// const user1: { name: string; age: number; city: string } = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const user2: { name: string; age: number; city: string , dep?: string } = {
//     name: "alif",
//     age: 25,
//     city: "Los Angeles"
// };
// user2.dep = "Jane Doe";
// console.log(user2)