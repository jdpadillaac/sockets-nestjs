import { Socket, Server } from 'socket.io';


export const desconectar = (cliente: Socket) => {
};


export const conectar = (cliente: Socket) => {

};

export const mensaje = (cliente: Socket, payload: any, io: Server) => {
    io.emit('newMessage', payload);
};

export const configurarUsuario = (cliente: Socket, payload: any, io: Server) => {
    return {success: true, message: `Usuario ${payload.nombre} configurado correctamente`}
}