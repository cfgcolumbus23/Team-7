import { channel } from "diagnostics_channel";


function createMessage(sender,recipient,message){
    c = new chatStructure(sender,recipient,message);
    return c;
}



function postMessage(channel,chat){
    channel.addChat(channel);
}


function loadChannels(){
    channels = [
        new Channel("user134","user1345"),
        new Channel("user1367", "user1345")
    ];
     
}
loadChannels();

function openChannel(user1,user2){
   
    for (const channel of channels){
        if(channel.user1 == user1 && channel.user2 == user2){
            return channel;
        }
        else if(channel.user2 == user1 && channel.user1 == user2){
            return channel;
        }
    }

    return new Channel(user1,user2);
}

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
