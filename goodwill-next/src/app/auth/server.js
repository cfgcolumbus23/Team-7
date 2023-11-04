'use server';
import { z } from 'zod';

class User {
    constructor(username, password, type) {
        this.username = username;
        this.password = password;
    }

    static async hashPassword(password) {
        return hashString(password);
    }

    async comparePassword(password) {
        return compareHash(password, this.password);
    }

    static async create(username, password) {
        const hashedPassword = await User.hashPassword(password);
        return new User(username, hashedPassword);
    }

    static async createAdmin(username, password) {
        return User.create(username, password, 'admin');
    }
}

const UserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
});

// validate the user object
export const validateUser = (user) => {
    const data = UserSchema.safeParse({ username: user.username, password: user.password });
    return data.success;
}

const hashString = (str) => {
    return str;
}

const compareHash = (str, hash) => {
    return str === hash;
}

// array of Users
var users = [];

// load the array from goodwill-next/data/users.json
const loadUsers = () => {
    users = [
        new User('admin', 'admin12345'),
        new User('user', 'user12345'),
    ];
}

loadUsers();

// save the array to goodwill-next/data/users.json
const saveUsers = () => {
    // convert to JSON
    const data = JSON.stringify(users);
    console.log(data);
}

saveUsers();

// find a user by username
const findUser = (username) => {
    for (const user of users) {
        if (user.username === username) {
            return user;
        }
    }
}

export const authenticate = async (username, password) => {
    const user = findUser(username);
    if (user && await user.comparePassword(password)) {
        return true;
    }
    return null;
}
