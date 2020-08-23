import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import styles from './SidebarChat.module.css';

const SidebarChat = ({ addNewChat }) => {
	const [ seed, setSeed ] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const createNewChat = () => {
		const roomName = prompt('please enter a room name');
		if (roomName) {
			//do clever database stuff here
		}
	};
	return !addNewChat ? (
		<div className={styles.sidebar_chat}>
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<div className={styles.sidebar_chat_info}>
				<h2>Room Name</h2>
				<p>last message ...</p>
			</div>
		</div>
	) : (
		<div onClick={createNewChat} className={styles.sidebar_chat}>
			<h2>Add New Chat</h2>
		</div>
	);
};

export default SidebarChat;
