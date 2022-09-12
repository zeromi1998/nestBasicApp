import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository"

@Injectable()
export class MessagesService {

    messageRepository:MessageRepository;

    constructor(messageRepo: MessageRepository){
        this.messageRepository =  messageRepo;
    }

    getAllMsg(){
        return this.messageRepository.getAllMsg()
    }


    findMsgById(id:string){
        
        return this.messageRepository.findMsgById(id)
    }

    createMsg(data:string){

       
        
        return this.messageRepository.createMsg(data)
    }
}