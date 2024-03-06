import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'
import { WsRoomsService } from './ws-rooms.service';
import { Room, User } from 'src/shared/chat.interface';

@WebSocketGateway({ cors: { origin: '*' } })
export class WsRoomsGateway implements 
  OnGatewayConnection,
  OnGatewayDisconnect
{
  @WebSocketServer()
  public server: Server

  constructor(private readonly wsRoomsService: WsRoomsService) {}

  handleConnection(client: Socket) {
    console.log(' > user connected '+ client.id)      
  }  
  
  async handleDisconnect(client: any) {
    console.log('> user disconnect')
    //await this.roomService.removeUserFromAllRooms(client.id)
  }

  @SubscribeMessage('create-room')
  async handleSetNewRoom( client: any, payload: any ) {
    const msj = 'Msg From Server: '+ payload.roomName + ' created'
    client.join(payload.roomName) 
    client.emit('create-room', msj)
    await this.wsRoomsService.addRoom(payload.roomName, payload.user)
    this.server.emit('get-rooms', this.wsRoomsService.rooms)
  }

  @SubscribeMessage('get-rooms')
  async handleGetRooms( client: any, payload: any ) {
    client.emit('get-rooms', this.wsRoomsService.rooms)
  }

  @SubscribeMessage('join-room')
  async handleSetJoinUser( client: any, payload: any ) {
    console.log(payload.roomName)
    //client.emit('get-rooms', this.wsRoomsService.rooms)
  }

  @SubscribeMessage('leave-room')
  async handleSetLeaveUser( client: any, payload: any ) {
    //client.emit('get-rooms', this.wsRoomsService.rooms)
  }


}

// await this.server.in(payload.user.socketId).socketsJoin(payload.roomName) 
// client.leave(room)
// client.emit('create-room', 'Recibido')
// this.server.to(room).emit('msgFromRoom', message)
    