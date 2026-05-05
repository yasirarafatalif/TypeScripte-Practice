interface User<T,Y = null> {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
    role: T;
    device?: Y;
}
const userWithRoleInterface: User<{ role: string }, null> = {
    name: "Alif",
    age: 30,
    email: "alif@example.com",
    isAdmin: true,
    role: { role: "admin" },
    device: null
};
const userWithRoleAndDevice: User<{ role: string }, object> = {
    name: "Alif",
    age: 30,
    email: "alif@example.com",
    isAdmin: true,
    role: { role: "admin" },
    device: { device: "iPhone" }
};
console.log(userWithRoleInterface)
console.log(userWithRoleAndDevice)