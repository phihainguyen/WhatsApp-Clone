import React, { useState, useEffect } from 'react';
import styles from './Chat.module.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Chat = () => {
	const [ seed, setSeed ] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className={styles.chat}>
			<div className={styles.chat_header}>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className={styles.chat_header_info}>
					<h3>Room Name</h3>
					<p>Last seen...</p>
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
				<p className={(styles.chat_message, styles.chat_reciever)}>
					<span className={styles.chat_name}>Sonny</span>
					Hey Guys
					<span className={styles.chat_timestamp}>3:52pm</span>
				</p>
			</div>

			<div className={styles.chat_footer} />
		</div>
	);
};

export default Chat;
