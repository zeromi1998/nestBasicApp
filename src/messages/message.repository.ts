import { Injectable } from "@nestjs/common";

const { readFile ,writeFile}  = require("fs").promises;

@Injectable()
export class MessageRepository{

   async findMsgById(id){

    const msg = await readFile("/home/zeromi1998/Music/Web Development/nestcli/messages.json","utf8");
    const parseMsg = JSON.parse(msg);
    const {ids} = id
    console.log("this is ",parseMsg,parseMsg[id],ids)
    return parseMsg[id];
    }

    async getAllMsg(){

       // const msg = await readFile("messages.json","utf8");
        const msg = await readFile('/home/zeromi1998/Music/Web Development/nestcli/messages.json', 'utf8');
        const parseMsg = JSON.parse(msg);
        return parseMsg;
    }

    async createMsg(message:string){
        const msg = await readFile("/home/zeromi1998/Music/Web Development/nestcli/messages.json","utf8");
        const parseMsg = JSON.parse(msg);
        const id = Math.floor(Math.random()*999)
        parseMsg[id] = {id ,message}
        await writeFile("/home/zeromi1998/Music/Web Development/nestcli/messages.json",JSON.stringify(parseMsg))

    }
    
}