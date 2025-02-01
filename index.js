const path = require('path')
const { spawn } = require('child_process')
const http = require('http')
const socketIo = require('socket.io')

//http server for socket.io
const server = http.createServer()

//http port
const port = 8005

//attach socket.io to server
const io = socketIo(server)

//listen for client connections
io.on('connection', (socket) => {
    console.log('Service connected');

    //lsten for a message from the client
    socket.on('message', (data) => {
        console.log('Received from service:', data);
    });

    //handle client disconnect
    socket.on('disconnect', () => {
        console.log('Service disconnected');
    });
});

//start microservice function
const startMicroservice = (serviceName) => {
    const servicePath = path.join(__dirname, 'services', serviceName, 'index.js')
    console.log(servicePath)
    const child = spawn('node', [servicePath])

    child.stdout.on('data', (data) => {
        console.log(`${serviceName}: ${data}`)
    })

    child.stderr.on('data', (data) => {
        console.error(`${serviceName}: ${data}`)
    })

    child.on('close', (code) => {
        console.log(`${serviceName} exited with code ${code}`)
    })
};

//listen on http
server.listen(port)

//start all services
startMicroservice("db")
startMicroservice("utils")