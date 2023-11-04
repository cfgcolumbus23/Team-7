

function createMessage(sender,recipient,message){
    c = new chat(sender,recipient,message);
    cJson = c.getJSON();
    console.log(cJson);
    return c;
}

function openChannel(user1,user2){
    return new Channel(user1,user2);
}
