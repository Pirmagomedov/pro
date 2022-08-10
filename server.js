const WebSocket = require("ws");

const wsServer = new WebSocket.Server({port: 9000});

var list = [];

wsServer.on("connection", onConnect);

function onConnect (wsClient){
  console.log("NeW uSeR !");
  list.push(wsClient);
  list.forEach(function(item){
    item.send("HELOOOOOOOOO");
  });
  
  wsClient.on("message", function(message){
    try{
      const jsonMessage = JSON.parse(message);
      switch (jsonMessage) {
        case "ECHO":
          wsClient.send(jsonMessage.data);
          break;
        case "PING":
          setTimeout(function() {
            wsClient.send("PONG");
          }, 2000)
          break;
        default:
          console.log("CoMmAnD BaD !");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  wsClient.on("close", function(){
    console.log("UsEr dEcOnNeCtEd !");
  });

}

console.log("9000 ----------- !!!!!!!!!");
