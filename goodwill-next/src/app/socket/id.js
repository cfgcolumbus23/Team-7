let initialId = 0;
let rooms = [];

const createRoom = (id, users) => {
    return {
        id,
        users,
    };
}

const getRoom = (id) => {
    for (const room of rooms) {
        if (room.id === id) {
            return room;
        }
    }
}

const createId = () => {
    initialId += 1;
}

const matchUserstoRoom = (users) => {
    // check if both users are in the same room
    // if not, create a new room
    // if yes, return the room
    let room = null;
    for (const r of rooms) {
        if (r.users.includes(users[0]) && r.users.includes(users[1])) {
            console.log(r);
            room = r;
            break;
        }
    }

    if (!room) {
        createId();
        room = createRoom(initialId, users);
        rooms.push(room);
    }

    return room;
}

module.exports = {
    matchUserstoRoom
};