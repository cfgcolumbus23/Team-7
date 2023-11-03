class Account {


    constructor(username, password, email, phone){
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.role = AccountPermissions.User 
    }

    assignRole(role){
        this.role = role
    }
    checkPermsission(){
        return this.role;
    }

    //ToDo Add method to ensure that username is not taken

    validatePassword(Password){
        //Reject if Password is too short
        if(Password.length < 7){
            return false;
        }
        //Reject if there are no lowerCase
        if(Password == Password.toUpperCase()){
            return false;
        }

        //Reject if there is no UpperCase
        if(Password == Password.toLowerCase()){
            return false;
        }
        let NumberCount = 0;
        for (let i = 0; i < 9;i++){
            
            if(Password.indexOf(i.toString()) > 0){
                NumberCount++;
            }
        }
        //Reject if there are no numbers, or approve if there are numbers
        return NumberCount > 0; 

    }

    resetPassword(newPassword){
        this.password = newPassword;
    }

    verifyPassword(attempt){
        return this.password === attempt;
    }

    
}