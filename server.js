const WebSocket = require("ws");

const wsServer = new WebSocket.Server({port: 9000});

wsServer.on("connection", onConnect);

function onConnect (wsClient){
  console.log("NeW uSeR !");
  
  wsClient.on("message", function(message){
    console.log(message);
    wsClient.send("alishka - top");
  });
  
  wsClient.on("close", function(){
    console.log("UsEr dEcOnNeCtEd !");
  });

}

console.log("9000 ----------- !!!!!!!!!");
