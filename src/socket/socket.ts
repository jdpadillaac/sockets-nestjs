import { Socket, Server } from 'socket.io';
import { ListaUsuarios } from 'src/classes/listaUsuarios.class';
import { Usuario } from '../classes/usuario.model';


export const usuariosConectados = new ListaUsuarios();

export const desconectar = (cliente: Socket) => {
    usuariosConectados.deleteUser(cliente.id);
};


export const conectar = (cliente: Socket) => {
    const usuario: Usuario = new Usuario(cliente.id)
    usuariosConectados.agregarUsuario(usuario);
};

export const mensaje = (cliente: Socket, payload: any, io: Server) => {
    io.emit('newMessage', payload);
};

export const configurarUsuario = (cliente: Socket, payload: any, io: Server) => {
    usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
    return { success: true, message: `Usuario ${payload.nombre} configurado correctamente` };
}