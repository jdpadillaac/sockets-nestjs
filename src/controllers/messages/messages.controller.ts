import { Controller,  Post, Body } from '@nestjs/common';
import { SendMessageDto } from 'src/dto/messagesSend.dto';
import { AppGateway } from '../../app.gateway';

@Controller('messages')
export class MessagesController {

    constructor (
        private readonly messageGtw: AppGateway
    ) {}

    @Post("/:id")
    public async sendMessage(@Body() data: SendMessageDto): Promise<any> {
        try {

            this.messageGtw.wss.emit('privateMessage', data)

            console.log(data);
            
            return {};
        } catch (error) {
            
        }
    }

}
