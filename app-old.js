const http = require('http');


http.createServer((request, responce) =>{
//la request es toda la informacion que necesita, y el responce lo que mi servidor va a responder
    responce.write('Hola Mundo');
    responce.end();

})
.listen(8080)

console.log('Escuchando el puerto ',8080);

