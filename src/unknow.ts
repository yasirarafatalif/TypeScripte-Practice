// const somefunction = (arg: string|number|boolean|undefined|null) => {
//     if (typeof arg === "string") {
//         console.log(`this is a string ${arg}`);
//     } else if (typeof arg === "number") {
//         console.log(`this is a number ${arg}`);
//     } else if (typeof arg === "boolean") {
//         console.log(`this is a boolean ${arg}`);
//     } else if (arg === undefined) {
//         console.log(`this is undefined`);
//     } else if (arg === null) {
//         console.log(`this is null`);
//     }
//     return arg;
// }
// somefunction("hello");
// somefunction(123);
// somefunction(true);
// somefunction(undefined);
// somefunction(null);

const somefunction = (arg: unknown) => {
    if (typeof arg === "string") {
        console.log(`this is a string ${arg}`);
    } else if (typeof arg === "number") {
        console.log(`this is a number ${arg}`);
    }
    else if (typeof arg === "boolean") {
        console.log(`this is a boolean ${arg}`);
    }
    else if (arg === undefined) {
        console.log(`this is undefined`);
    }
    else if (arg === null) {
        console.log(`this is null`);
    }
    return arg;
}
somefunction("hello");
somefunction(123);
somefunction(true);
somefunction(undefined);
somefunction(null);