import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WsResponse,  OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { desconectar, conectar, mensaje } from './socket/socket';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Iniciado');
  }

  handleDisconnect(client: Socket) {
    desconectar(client);
  }

  handleConnection(client: Socket, ...args: any[]) {
    conectar(client);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string){
    mensaje(client, payload, this.wss);    
  }
}
