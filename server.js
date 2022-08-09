const express = require('express'),
  app = express(),
  http = require('http').createServer(app)

const host = '127.0.0.1'
const port = 7000

let clients = []

io.on('connection', (socket) => {
  console.log(`sdfsdf`)

  socket.emit('message', "I'm server")

  socket.on('message', (message) =>
    console.log('Message: ', message)
  )

  
})

 
//получение количества активных клиентов
app.get('/clients-count', (req, res) => {
  res.json({
    count: io.clients().server.engine.clientsCount,
  })
})

//отправка сообщения конкретному клиенту по его id
 
 
http.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
