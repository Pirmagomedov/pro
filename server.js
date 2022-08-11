const WebSocket = require("ws");

var redis = require('redis');

var client = redis.createClient()

client.set('myKey', 'Бла бла-бла бла')

const wsServer = new WebSocket.Server({port: 9000});

const clients = [];

wsServer.on("connection", onConnect);

function onConnect (wsClient){
    
    client.get('myKey', function (err, repl) {
       console.log(repl);  
    };
    
    ////////////////
    
    /*client.set('myKey', 'Бла бла-бла бла', function (err, repl) {
    if (err) {
           // Оо что то случилось при записи
           console.log('Что то случилось при записи: ' + err);
           client.quit();
    } else {
           // Прочтем записанное
           client.get('myKey', function (err, repl) {
                   //Закрываем соединение, так как нам оно больше не нужно
                   client.quit();
                   if (err) {
                           console.log('Что то случилось при чтении: ' + err);
                   } else if (repl) {
                   // Ключ найден
                           console.log('Ключ: ' + repl);
               } else {
                   // Ключ ненайден
                   console.log('Ключ ненайден.')

                        };
                    });
                };
            }); */

    
    /////////////////
    
    
  clients.push(wsClient);
  console.log("NeW uSeR !");
  
  wsClient.on("message", function(message){
      var knam = JSON.parse(message);
      var name = knam.name;
      var msg = knam.msg;
      clients.forEach(function(item){
        console.log(item);
        item.send(JSON.stringify({name, msg})); 
      })
  });
  
  wsClient.on("close", function(){
    console.log("UsEr dEcOnNeCtEd !");
  });

}

console.log("9000 ----------- !!!!!!!!!");
