const express = require('express');
const app = express();
const path = require("node:path");
//Routers

    app.get('/puna', ( req, res ) => {
    const pathpuna = path.join(__dirname, "views/puna.html")

    res.sendFile(pathpuna);
})
    app.get('/quebrada', ( req, res ) => {
    const pathquebrada = path.join(__dirname, "views/quebrada.html")
    
    res.sendFile(pathquebrada);
    })
    app.get('/valles', ( req, res ) => {
    const pathvalles = path.join(__dirname, "views/valles.html")
        
    res.sendFile(pathvalles);
    })
    app.get('/yungas', ( req, res ) => {
    const pathyungas = path.join(__dirname, "views/yungas.html")
            
    res.sendFile(pathyungas);
    })

    app.use(express.static("public"))
    app.listen( 3000, () => console.log("Server on PORT: http://localhost:3000"))