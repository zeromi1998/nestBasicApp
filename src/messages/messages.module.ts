import { Module } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessageRepository]
})
export class MessagesModule {}
