import { Usuario } from './usuario.model';
export class ListaUsuarios {

    private lista: Usuario[] = [];

    public agregarUsuario(usuario: Usuario) {
        this.lista.push(usuario);
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for (const item of this.lista) {
            if(item.id === id) {
                item.nombre = nombre;
                break;
            }
        }
    }

    public obtenerListUsuarios(): Usuario[] {
        return this.lista;
    }

    public getUsuario(id: string): Usuario {
        return this.lista.find(user => user.id === id);
    }

    public obtenerUsuariosDeSala(sala: string): Usuario[] {
        return this.lista.filter(user => user.sala === sala)
    }

    public deleteUser(id:string): Usuario {
        const temUser = this.getUsuario(id);
        this.lista = this.lista.filter(user => user.id !== id);
        return temUser;
    }
}