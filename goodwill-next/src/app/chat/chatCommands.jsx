

function createMessage(sender,recipient,message){
    c = new chat(sender,recipient,message);
    cJson = c.getJSON();
    console.log(cJson);
    return c;
}

createMessage("Kevin","Jake","Hello");
