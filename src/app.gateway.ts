import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WsResponse,  OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Iniciado');
  }

  handleDisconnect(client: Socket) {
    this.logger.log('Cliente desconectado');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Cliente conectado  ${client.id} `);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void{
    // return { event: 'messageToClient', data: 'hello word' };
    this.wss.emit('mesageToClint');
  }
}
