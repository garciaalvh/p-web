var express = require('express');

var app= express();
app.get("/",function(solicitud,respuesta){ // (req, res)
	respuesta.send("hola mundoprimera pagina web");
});

app.listen(8080);


// https://www.youtube.com/watch?v=jsPZiGTUlQQ&list=PLpOqH6AE0tNjh_agCrY02NISwODL2XBWL&index=14