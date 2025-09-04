 //importando o modulo http
 const http = require('http');
 
//criando um servidor que responde com Hello Worldp todas as requisições
http.createServer((req, res) => {

    //definindo o cabeçalho da resposta
    res.write(200, {'Content-Type': 'text/plain'});

//enviando a resposta
res.end('Hello World');

//adicionando um log no console
}).listen(8080);