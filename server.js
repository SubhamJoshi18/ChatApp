const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

io.on("connection", (socket) => {
  console.log("Creating an Connection");
  console.log("A new User is Connected", socket.id);

  socket.on("message", (newMessage) => {
    console.log("A new User Message", newMessage);
    io.emit("message", newMessage);
  });
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
