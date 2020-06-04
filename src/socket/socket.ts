import { Socket } from 'socket.io';


export const desconectar = (cliente: Socket) => {
    console.log(`Cliente ${cliente.id} desconectado`);
}


export const conectar = (cliente: Socket) => {
    console.log(`Cliente ${cliente.id} conectado`);
    
}

export const mensaje = (cliente: Socket, payload: any) => {
    console.log(`Mensaje de cliente ${cliente.id}`);
}