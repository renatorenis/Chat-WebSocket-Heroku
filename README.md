Este repositório apresenta o protocolo de WebSockets

Aplicação de Chat utilizando Node.js

Web chat utilizando Node.js. Com Node.js podemos usar JavaScript no lado servidor. A aplicação utiliza WebSockets (recurso do HTML5) com a biblioteca http://socket.io para implementar o chat.

A biblioteca socket.io apenas facilita o uso do recurso de WebSocket. WebSocket é um protocolo full-duplex leve para transmissão de dados em aplicações web. Se tal biblioteca for usada em uma aplicação web em Node.js, quando é feita uma conexão WebSocket ao servidor, todo o extenso cabeçalho e corpo de uma mensagem HTTP é trafegado pela rede. Depois que a conexão é realizada, ela fica estabelecida com o servidor e, a partir daí, somente os dados enviados pela aplicação (normalmente digitados pelo usuário) e um pequeno cabeçalho (usualmente de apenas 32 bits) serão enviados ao servidor.
