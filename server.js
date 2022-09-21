//função construtora da aplicação!//
const express = require ('express')
const app = express ()

app.use(express.static('public'))

const http = require ('http').Server(app)
const serverSocket = require ('socket.io')(http)

const porta = 8000

http.listen(porta,function() {
    console.log('Servidor iniciado. Abra o navegador em: http://localhost:' +porta);

})

//Verbos = GET,POST,DELETE,URL
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')

})

serverSocket.on('connection', function(socket){
  
    socket.on('login', function(nickname){ 
    console.log('Cliente conectado: '+ nickname)
    serverSocket.emit('chat msg', `Usuário ${nickname} conectou.`)
    socket.nickname = nickname 

})
  socket.on('chat msg', function(msg){ 
    console.log(`Mensagem recebida do cliente ${socket.nickname}: ${msg}`);
    socket.emit('chat msg', `${socket.nickname}: diz: ${msg}`)
    })

    socket.on('status', function(msg){
        socket.broadcast.emit('status', msg)
})

})