const app = require("express");

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:5173" },
});

const PORT = 3001;

io.on("connection", (socket) => {
  console.log("Usuario Conectado!", socket.id);


socket.on("disconnect", reason =>{
  console.log("Usuario Desconectado", socket.id);
})

  socket.on("set_username", (userName) => {
    socket.data.userName = userName;
  });

  socket.on('message', text=>{
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.userName
    })
  })
});



server.listen(PORT, () => {
  console.log("Server Running...");
});
