const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { matchUserstoRoom } = require("./id.js");

const httpServer = http.createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000/socket", // Replace with your frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log(socket)
    console.log("A user connected:", socket.id);
    socket.on("join_room", (username, otherUser) => {

        const room = matchUserstoRoom([username, otherUser]);

        console.log(`user with id-${socket.id} joined room - ${room.id}`);
        socket.join(room.id);
    });

    socket.on("send_msg", (data) => {
        // console.log(data, "DATA");
        //This will send a message to a specific room ID
        socket.to(data.roomId).emit("receive_msg", data);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`Socket.io server is running on port ${PORT}`);
});