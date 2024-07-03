
enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name: string;
    email: string;
    password: string;
    role: Roles
}

let user1: LoginDetails = {
    name: "sajan",
    email: "sajan@gmail.com",
    password: "sajan123",
    role: Roles.admin
}

let user2: LoginDetails = {
    name: "don",
    email: "don.com",
    password: "dog",
    role: Roles.user
}

const isAdmin = (user: LoginDetails): string => {
    let { name, role } = user;
    return role === "admin" ? `${name} is allowed to make changes` : `${name} is not allowed to make changes`;
}

console.log(isAdmin(user1));