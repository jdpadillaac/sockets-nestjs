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

            const resp: any = {
                de: data.de,
                body: data.body
            }
            
            this.messageGtw.wss.in(data.id).emit('privateMessage', resp)

            console.log(data);
            
            return {};
        } catch (error) {
            
        }
    }

    @Post("")
    public async sendMessageToAll(@Body() data: SendMessageDto): Promise<any> {
        try {

            const resp: any = {
                de: data.de,
                body: data.body
            }
            
            this.messageGtw.wss.emit('newMessage', resp)

            console.log(data);
            
            return {};
        } catch (error) {
            
        }
    }

}
