import { UserModel } from "../models/user.model";

export class UserService {
    static getUsers(): UserModel[] {
        if(!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '123-456-7890',
                    password: 'password123',
                    data: []
                }
            ]))
        }

        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    static findUserByEmail(email:string) {
        const users = this.getUsers();
        const selectedUser = users.find(u => u.email === email);

        if(!selectedUser)
            throw new Error('User_Not_Found');

        return selectedUser;
    }

    static login(email: string, password: string) {
        try {
            const user = this.findUserByEmail(email)
            if(user.password === password) { 
                localStorage.setItem('loggedInUser', user.email)
                return true
            }
            return false
        } catch {
            return false;
        }
    }

    static hasAuth() {
        return localStorage.getItem('loggedInUser') !== null;
    }

    static getActiveUser() {
        if(!this.hasAuth()) {
            throw new Error('No_Active_User');
        }

        return this.findUserByEmail(localStorage.getItem('loggedInUser')!);
    }

    static logout() {
        localStorage.removeItem('loggedInUser');
    }

}