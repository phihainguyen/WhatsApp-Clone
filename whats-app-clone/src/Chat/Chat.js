import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './Chat.module.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from '../Firebase';
import firebase from 'firebase'
import {useStateValue} from '../StateProvider'

const Chat = () => {
	
	const [ input, setInput ] = useState('');
	const [ seed, setSeed ] = useState('');
	const { roomID } = useParams();
	const [roomName, setRoomName] = useState('');
	const [messages, setMessages] = useState([])
	const [{user}] = useStateValue()

	useEffect(()=>{
		if(roomID){
			db.collection('Rooms').doc(roomID).onSnapshot(snapshot => (
				setRoomName(snapshot.data().Name)
	
			));

			db.collection('Rooms').doc(roomID).collection("Messages").orderBy('timestamp', 'asc').onSnapshot(snapshot =>(
				setMessages(snapshot.docs.map((doc)=>doc.data()))
			))
		}
	}, [roomID])
	
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, [roomID]);

	const sendMessage=(e)=>{
		e.preventDefault()
		console.log("you tped " +input)
		db.collection('Rooms').doc(roomID).collection('Messages').add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setInput('')
	}

	return (
		<div className={styles.chat}>
			<div className={styles.chat_header}>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				
				<div className={styles.chat_header_info}>
					<h3>{roomName}</h3>
					<p>Last seen{" "}
						{new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
					</p>
				</div>
				<div className={styles.chat_header_right}>
					<IconButton>
						<SearchIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className={styles.chat_body}>
				{messages.map((message)=>(
					<p key ={message.timestamp} className={message.name === user.displayName ? styles.chat_reciever : styles.chat_message }>
						<span className={styles.chat_name}>{message.name}</span>
						{message.message}
						<span className={styles.chat_timestamp}>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
					</p>
				))}
				
			</div>

			<div className={styles.chat_footer}>
				<InsertEmoticonIcon/>
				<form>
					<input 
					type="text" 
					placeholder="Type a message" 
					value={input}
					onChange={e => setInput(e.target.value)}></input>
					<button onClick={sendMessage}>Send a message</button>
				</form>
				<MicIcon></MicIcon>

			</div>
		</div>
	);
};

export default Chat;
