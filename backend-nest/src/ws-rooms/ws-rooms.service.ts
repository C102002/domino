import { Injectable } from '@nestjs/common';
import { Room, User } from 'src/shared/chat.interface';

@Injectable()
export class WsRoomsService {

  public rooms: Room[] = []
  
  async addRoom( name: string, user: User ) { 
    const room = {
      name: name,
      host: user,
      users: [user]  
    }
    this.rooms.push( room )
  } 

}
