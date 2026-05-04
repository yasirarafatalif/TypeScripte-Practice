type User ={
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}
type Role = {
    role: string;
}

// Intersection type
type UserWithRole = User & Role;

//` Interface type
interface IuserWithRole extends User {
    role: string;
}

const userWithRoleInterface: IuserWithRole = {
    name: "Alif",
    age: 30,
    email: "alif@example.com",
    isAdmin: false,
    role: "admin"
};

const userWithRole: UserWithRole = {
    name: "Alif",
    age: 30,
    email: "alif@example.com",
    isAdmin: false,
    role: "user"
};
console.log(userWithRole)
console.log(userWithRoleInterface)
