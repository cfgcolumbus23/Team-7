

function createMessage(sender,recipient,message){
    c = new chat(sender,recipient,message);
    return c;
}

function openChannel(user1,user2){
    return new Channel(user1,user2);
}



function loadChannels(){
    channels = [
        new Channel("user134","user1345"),
        new Channel("user1367", "user1345")
    ];
     
}
loadChannels();

function enterChannel(user, channel){
    channel.setActive(user);
}

function leaveChannel(user, channel){
    channel.setInactive(user);
}


function saveChannels(){
    const data = JSON.stringify(channels);
    console.log(data);
}

saveChannels();
