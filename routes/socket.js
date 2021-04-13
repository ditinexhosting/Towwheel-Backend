const Controllers = require('../controllers')
const Socket = Controllers.Socket

module.exports = (io) => {
    io.use((socket,next)=>{
        let token = socket.handshake.query.token;
        //Import the middleware here
        next();
    })
    
    io.of('/driver-ride-request').on('connection',(socket)=>Socket.DriverRideRequest(socket,io));
    /*io.of('/room-chat').on('connection',(socket)=>Socket.RoomChat(socket,io));
    io.of('/picture-comment').on('connection',(socket)=>Socket.PictureComment(socket,io));*/
};

