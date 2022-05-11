const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/inicio.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/producto.html');
});

app.get('/bolsones', (req,res)=>{
    res.sendFile(__dirname + '/views/bolsones.html');
});

app.get('/frutas', (req,res)=>{
    res.sendFile(__dirname + '/views/frutas.html');
});

app.get('/verduras', (req,res)=>{
    res.sendFile(__dirname + '/views/verduras.html');
});

app.get('/bananas', (req,res)=>{
    res.sendFile(__dirname + '/views/bananas.html');
});

app.get('/mandarina', (req,res)=>{
    res.sendFile(__dirname + '/views/mandarina.html');
});

app.get('/kiwi', (req,res)=>{
    res.sendFile(__dirname + '/views/kiwi.html');
});

app.get('/limon', (req,res)=>{
    res.sendFile(__dirname + '/views/limon.html');
});


app.get('/brocoli', (req,res)=>{
    res.sendFile(__dirname + '/views/brocoli.html');
});


app.get('/champignon', (req,res)=>{
    res.sendFile(__dirname + '/views/champignon.html');
});


app.get('/lechuga', (req,res)=>{
    res.sendFile(__dirname + '/views/lechuga.html');
});



app.get('/papa', (req,res)=>{
    res.sendFile(__dirname + '/views/papa.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});

// npm start