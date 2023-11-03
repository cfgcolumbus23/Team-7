class Account {


    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    verifyPassword(attempt){
        return this.password === attempt;
    }
}