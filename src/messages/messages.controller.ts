import { Controller ,Get,Post,Body,Param, NotFoundException} from '@nestjs/common';
import { CreateMsgDto } from './dtos/create-msg.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {

    messageService : MessagesService;

    constructor(messageService:MessagesService){
        this.messageService =  messageService;
    }


    @Get()
    getAllMsg(){
       return  this.messageService.getAllMsg()
    }

    @Get("/:id")

  async  getMsgById(@Param("id") id:string){
        const data =await this.messageService.findMsgById(id)
        if(!data){
            throw new NotFoundException("message not found")
        }
        return data
        
    }

    @Post("")

    createNewMsg(@Body() body:any){
        return this.messageService.createMsg(body.message)
    }


}
