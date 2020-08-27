import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import styles from './SidebarChat.module.css';
import db from '../Firebase';

const SidebarChat = ({ id, name, addNewChat }) => {
	const [ seed, setSeed ] = useState('');
	const [message, setMessage] = useState('')
useEffect(() => {
	if(id){
		db.collection('Rooms').doc(id).collection('Messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
			setMessage(snapshot.docs.map((doc)=> doc.data()))
		))
	}
}, [id])

	useEffect(() => {
		
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const createNewChat = () => {
		const roomName = prompt('please enter a room name');
		if (roomName) {
			db.collection('Rooms').add({
				Name: roomName,
			})
		}
	};
	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className={styles.sidebar_chat}>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className={styles.sidebar_chat_info}>
					<h2>{name}</h2>
					<p>{message[0]?.message}</p>
				</div>
			</div>
		</Link>
		
	) : (
		<div onClick={createNewChat} className={styles.sidebar_chat}>
			<h2>Add New Chat</h2>
		</div>
	);
};

export default SidebarChat;
