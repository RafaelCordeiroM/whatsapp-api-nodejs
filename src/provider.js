const { createServer } = require("http");

const httpServer = createServer();

const provider = () => {

    const io = require("socket.io")(httpServer, {
        cors: {
          origin: "http://localhost:3000",
          methods: ["GET", "POST"]
        }
      });
      
      httpServer.listen(3009);
}

module.exports = provider
