import React, {useEffect, useRef, useState} from 'react';
import { useNavigate , useParams } from "react-router-dom";


const WebSock = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const socketId = useRef(Date.now())
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState('')
    const [ready, setReady] = useState(false)
    const [createdRoomId, setCreatedRoomId] = useState(null)
    const [bothConnected,setBothConnected] = useState(false)
    const [notFound,setNotFound] = useState(false)
    const navigate = useNavigate()
    const [timer,setTimer] = useState(5)
    if(bothConnected===true){
        setInterval(() => setTimer(timer - 1),1000)
    }

    const params = useParams()
    // console.log(params)


    function connect() {
        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = () => {
            const message = {
                event: 'connection',
                username,
                id: socketId.current
            }
            socket.current.send(JSON.stringify(message))
            if(params.roomID){
                // console.log ('HERERE=>',{event:'JOIN_ROOM',roomId:params.roomID})
                socket.current.send(JSON.stringify({event:'JOIN_ROOM',roomId:params.roomID,id:socketId.current}))
            }
            setConnected(true)

        }
        socket.current.onmessage = (message) => {
            // console.log(message.data)
            // // console.log (message.data)
            const parsedMessageFromWS = JSON.parse(message.data)
            // console.log(parsedMessageFromWS)
            if(parsedMessageFromWS.event === '2_PLAYERS_CONNECTED'){
                setBothConnected(true)
                let timer = setTimeout(() => navigate('/board'), 5000);
                // navigate('/konec')
                // console.log (bothConnected,'===============')

            }
            if(parsedMessageFromWS.event === 'ROOM_DOES_NOT_EXIST'){
                window.alert('Комната не найдена, попробуйте перезагрузить страницу')
                setNotFound(true)

                // window.alert('Комната не найдена, попробуйте перезагрузить страницу')
            }
            // console.log (tst)

            // // const eventType = tst.event
            // // console.log (eventType)
            // setMessages(prev => [message, ...prev])
        }
        socket.current.onclose= () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket произошла ошибка')
        }
        // socket.current.on('isReady')
    }

    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        // console.log (message)
        socket.current.send(JSON.stringify(message));
        setValue('')
    }
    const createRoomHandler = () => {
        const messageWithRoom = {event:'ROOM_CREATED',roomId:String(Math.floor(Math.random() * (100-1)) + 1), id:socketId.current}
        socket.current.send(JSON.stringify(messageWithRoom))
        setCreatedRoomId(messageWithRoom.roomId)
    }

    const imReady = async () => {
        setReady(true)
        const isReady = {
            username,
            ready:true,
            id: Date.now(),
            event: 'ready'
        }
        // allReady += 1
        // console.log (isReady)
        socket.current.send(JSON.stringify(isReady));
    }
    const imNotReady = async () => {
        setReady(false)
        const isReady = {
            username,
            ready:false,
            id: Date.now(),
            event: 'not-ready'
        }
        // console.log (isReady)
        socket.current.send(JSON.stringify(isReady));
    }


    useEffect (() => {
     connect()

    } , []);

    if(notFound){
        return <div>KOMNATA NE NAIDENA</div>
    }
    if (!connected) {
        return (
            <div className="center">
                {!params?.roomID && <button onClick={()=>createRoomHandler()}>SOZDAT EBU4UYU KOMNATU</button> }
                {(!params?.roomID &&createdRoomId) && <div>{createdRoomId}</div>}
                <div className="form">
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        placeholder="Введите ваше имя"/>
                </div>
            </div>
        )
    }


    return (
        <div className="center">
            <div>
                {!params?.roomID &&<button onClick={()=>createRoomHandler()}>SOZDAT EBU4UYU KOMNATU</button>}
                {(createdRoomId && !params?.roomID) && <div>http://localhost:3000/room/{createdRoomId}</div>}
                <div className="form">
                    {(bothConnected &&!createdRoomId)? <><div>OBA GOTOVY</div>
                        <h1>{timer}</h1>
                    </>
                        : <div>GHDEM VTOROGO</div>}
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Отправить</button>
                    {!ready ?
                    <button onClick={imReady}>ready</button>
                        :
                        <button onClick={imNotReady}>not ready</button>}
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div key={mess.id}>
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    Пользователь {mess.username} подключился
                                </div>
                                : <div className="message">
                                    {mess.username}. {mess.message}
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WebSock;
