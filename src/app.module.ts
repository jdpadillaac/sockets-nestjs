import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { MessagesController } from './controllers/messages/messages.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MessagesController
  ],
  providers: [AppService, AppGateway],
})
export class AppModule {}
