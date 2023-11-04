// import { channel } from "diagnostics_channel";

// //Creates a new message
// function createMessage(sender,recipient,message){
//     c = new chatStructure(sender,recipient,message);
//     return c;
// }

// //posts message to channel
// function postMessage(channel,chat){
//     channel.addChat(channel);
// }

// //loads channels, will switch to JSON
// function loadChannels(){
//     channels = [
//         new Channel("user134","user1345"),
//         new Channel("user1367", "user1345")
//     ];

// }
// loadChannels();

// //Open channel between 2 users, or open existing channel
// function openChannel(user1,user2){

//     for (const channel of channels){
//         if(channel.user1 == user1 && channel.user2 == user2){
//             return channel;
//         }
//         else if(channel.user2 == user1 && channel.user1 == user2){
//             return channel;
//         }
//     }
//     ch = new Channel(user1,user2)
//     channels.push(ch);
//     return ;
// }

// //Allows user to enter channel
// function enterChannel(user, channel){
//     channel.setActive(user);
// }

// //allows user to leave channel
// function leaveChannel(user, channel){
//     channel.setInactive(user);
// }

// //Saves channels to json
// function saveChannels(){
//     const data = JSON.stringify(channels);
//     console.log(data);
// }

// saveChannels();
