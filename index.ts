import http from 'http';
import apps from './src/app';
const socketIO = require("socket.io");
require("dotenv").config();

const port = process.env.PORT || process.env.PORT;

const httpServer = http.createServer(apps);
let io = socketIO(httpServer);


httpServer.listen(port);
io.on("connection", (socket: any) => {
  //console.log(`User Connected: ${socket.id}`);
  socket.on("join_room", (data: any) => {
    socket.join(data);
    //console.log(`User with ID: ${socket.id} joined room: ${data.room}`);
  });
  socket.on("sendMessage", (data: any) => {
    //console.log(data);
    socket.to(data.room).except(data.room).emit("receive_message", data);
    socket._error((err: any) => {
      //console.log(err);
    });
  });
  socket.on("disconnect", () => {
    //console.log("User Disconnected", socket.id);
  });
});
