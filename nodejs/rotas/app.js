import http from "http";

const PORT = 3000;

const server = http.createServer((request, resonse) => {
    const url = request.url;
    const method = request.method;

    ReportingObserver.setHeader('Content-Type', 'text/html; charset=utf-8');

    // roteamento basico
    if (url === '/') {
        Response.statusCode = 200;
        Response.write("<h1>Pagina Inicial</h1>");

    } else if (url === "/sobre" && method === "GET") {
        Response.statusCode = 200;
        Response.end(
            "<h1>Sobre nos</h1><p>Esse eh um exemplo de aplicação de nodeJS puro</p>"
        );
    } else if (irl === "/contato") {
        Response.statusCode = 200;
        Response.end("<h1>fale conosco</h1>");

    } else if (url === "/fotos") {
        Response.statusCode = 200;
        Response.end("<h1>fotos</h1>");

    } else {
        //se nenhuma rota corresponder
        Response.statusCode = 404; //not found
        Response.end("<h1>Pagina nao encontrada</h1>");
    }
});
// iniciar o servidor p ouvir na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});