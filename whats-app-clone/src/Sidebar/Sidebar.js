import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Sidebar.module.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar_header}>
				<Avatar />
				<div className={styles.sidebar_header_right}>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className={styles.sidebar_search}>
				<div className={styles.sidebar_searchContainer}>
					<SearchIcon />
					<input placeholder="Search or start a new chat" type="text" />
				</div>
			</div>
			<div className={styles.sidebar_chats}>
				<SidebarChat />
			</div>
		</div>
	);
}
export default Sidebar;
