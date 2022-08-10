const WebSocket = require("ws");

const wsServer = new WebSocket.Server({port: 9000});

const clients = [];

wsServer.on("connection", onConnect);

function onConnect (wsClient){
  clients.push(wsClient);
  console.log("NeW uSeR !");
  
  wsClient.on("message", function(message){
      var knam = JSON.parse(message);
      var name = knam.name;
      var msg = knam.msg;
      clients.forEach(function(item){
        item.send(JSON.stringify({name, msg})); 
      })
  });
  
  wsClient.on("close", function(){
    console.log("UsEr dEcOnNeCtEd !");
  });

}

console.log("9000 ----------- !!!!!!!!!");
