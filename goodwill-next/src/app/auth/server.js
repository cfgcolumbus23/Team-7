'use server';
import { z } from 'zod';

/**
 * Represents a user in the system.
 * @class
 */
class User {
    /**
     * Creates a new User instance.
     * @constructor
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     * @param {string} role - The role of the user.
     */
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    /**
     * Hashes the given password.
     * @static
     * @async
     * @param {string} password - The password to hash.
     * @returns {Promise<string>} A promise that resolves with the hashed password.
     */
    static async hashPassword(password) {
        return hashString(password);
    }

    /**
     * Compares the given password with the user's password.
     * @async
     * @param {string} password - The password to compare.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the passwords match.
     */
    async comparePassword(password) {
        return compareHash(password, this.password);
    }

    /**
     * Creates a new User instance with the given username and password.
     * @static
     * @async
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     * @returns {Promise<User>} A promise that resolves with a new User instance.
     */
    static async create(username, password) {
        const hashedPassword = await User.hashPassword(password);
        return new User(username, hashedPassword);
    }

    /**
     * Creates a new admin User instance with the given username and password.
     * @static
     * @async
     * @param {string} username - The username of the admin user.
     * @param {string} password - The password of the admin user.
     * @returns {Promise<User>} A promise that resolves with a new admin User instance.
     */
    static async createAdmin(username, password) {
        return User.create(username, password, 'admin');
    }
}

const UserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
    role: z.string().optional(),
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
        new User('admin', 'admin12345', 'admin'),
        new User('bossman', 'bossman12345', 'admin'),
        new User('employee', 'emp12345', 'employee'),
        new User('employee2', 'cust12345', 'employee'),
        new User('tyler', 'tyler12345', 'employee'),
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
