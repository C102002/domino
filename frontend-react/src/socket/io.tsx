import { useEffect, useState } from "react";
import './io.css'
import { v4 } from 'uuid'

export const CoreIO = ( {prop}: any ) => {

    useEffect( () => {
        if (prop != null) {
            prop.on('create-room', (res:any) => {
                console.log(res)
            })
            prop.on('get-rooms', (res:any) => {
                console.log('Rooms received :')
                console.log(res)
                setRooms(res)
            }) 
            prop.on('join-room', (res:any) => {
                console.log(res)
            }) 
            prop.on('leave-room', (res:any) => {
                console.log(res)
            }) 
            prop.on('delivery-tokens', (res:any) => {
                console.log(res)
            }) 
            return () => {   
                prop.off('create-room')
                prop.off('get-rooms')
                prop.off('join-room')
                prop.off('leave-rooms')
                prop.off('delivery-tokens')
            }
        }
    }, [])

    const [user, setUser] = useState({ userId: v4(), userName: 'russa', socketId: prop.id })
    const createRoom = () => prop.emit('create-room', { user: user, roomName: roomName } )
    const getRooms = () => prop.emit('get-rooms')
    const delivery = () => prop.emit('delivery-tokens', { user: user, roomName: roomName })
    const closeSocket = () => prop.disconnect() 
    const onSetRoom = ({target}:any) => setRoomName(target.value)
    const onSetUsername = ({target}:any) => setUser({...user, userName: target.value, socketId: prop.id})
    const [roomName, setRoomName] = useState('unnamed')
    const [rooms, setRooms] = useState([{ name: 'none', host: null, users: [] }])
    const createOption = ( name: string, users: any[] ) => {
        if (name == 'none') return <div>Vacio</div>
        return ( <button key={name} onClick={() => joinRoom(name)}> {name} [{users.length+'/4'}] </button> )
    }
    const joinRoom = (e: any) => prop.emit('join-room', { user: user, roomName: e } )
    const leaveRoom = (e: any) => prop.emit('leave-room', { user: user, roomName: e } )

    return (
        <div className="main-io">

            <button onClick={ createRoom }>createRoom</button>
            <button onClick={ getRooms }>getRooms</button>
            <button onClick={ closeSocket }>CloseConnection</button>
            <button onClick={ delivery }>Delivery</button>

            RoomName
            <input type="text" onChange={onSetRoom} /> 
            Username  
            <input type="text" onChange={onSetUsername}/>   
        
            <div className="options-io">
                Options
                { rooms.map( e => createOption(e.name, e.users) ) }
            </div>
        </div>
    )
}