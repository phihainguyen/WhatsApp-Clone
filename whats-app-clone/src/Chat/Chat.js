import React from 'react';
import styles from './Chat.module.css';
import { Avatar, IconButton } from '@material-ui/core';

const Chat = () => {
	return (
		<div className={styles.chat}>
			<div className={styles.chat_header}>
				<Avatar />
			</div>
			<div className={styles.chat_body} />

			<div className={styles.chat_footer} />
		</div>
	);
};

export default Chat;
