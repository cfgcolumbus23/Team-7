class chatStructure{
    constructor(sender,recepient,message){
        this.sender = sender;
        this.recepient = recepient;
        this.message = message;
        this.date = new Date();
    }

    getMessage(){
        return this.getmessage();
    }

    editMessage(newMessage){
        this.message = newMessage;
    }

   

    getJSON(){
        return JSON.stringify(this);
    }
}