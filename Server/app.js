const express = require('express')
const app = require('express')();
const PORT = 8000
const http = require('http').createServer(app);
const timeReuquest = 5
const io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
});

io.on('connection', (socket) => {
    // console.log('a user connected');
    renderTime(socket)
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect`);
    });
});
http.listen(PORT, () => {
    console.log(`Serve run on port *: ${PORT}`);
});
const renderTime = (socket) => {
    let time = new Date();
    time = time.getSeconds();
    const data = [
        ['Year', 'Month', 'Day', 'Hour'],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
        ['2014', Math.floor(Math.random() *2000), Math.floor(Math.random() *1000), Math.floor(Math.random() *500)],
    ]
    socket.emit('Time' , {data : data , time : time})
    setInterval(() => {
        renderTime(socket)
    } ,timeReuquest * 1000)
}
