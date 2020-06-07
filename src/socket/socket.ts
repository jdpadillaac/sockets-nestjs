import { Socket, Server } from 'socket.io';


export const desconectar = (cliente: Socket) => {
    console.log(`Cliente ${cliente.id} desconectado`);
}


export const conectar = (cliente: Socket) => {
    console.log(`Cliente ${cliente.id} conectado`);
    
}

export const mensaje = (cliente: Socket, payload: any, io: Server) => {
    console.log(payload)
    console.log(`Mensaje de cliente ${cliente.id}`);
    io.emit('newMessage', payload);
    
}