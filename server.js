const WebSocket = require("ws");

const wsServer = new WebSocket.Server({port: 9000});

wsServer.on("connection", onConnect);

function onConnect (wsClient){
  console.log("NeW uSeR !");
  
  wsClient.on("message", function(message){
    const jsonMessage = JSON.parse(message);
    wsClient.send(JSON.stringify(msg: jsonMessage.msg));
  });
  
  wsClient.on("close", function(){
    console.log("UsEr dEcOnNeCtEd !");
  });

}

console.log("9000 ----------- !!!!!!!!!");
