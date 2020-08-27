import React, {useState, useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Sidebar.module.css';
import SidebarChat from './SidebarChat';
import db from '../Firebase'
import { useStateValue } from '../StateProvider';

function Sidebar() {
	const [rooms, setRooms ] = useState([]);
	const [{user}] = useStateValue()
	useEffect(()=>{
			const unsubscribe = db.collection('Rooms').onSnapshot((snapshot) => 
				setRooms(
					snapshot.docs.map((doc)=>(
					{
						id: doc.id,
						data: doc.data(),
					}))
				)	
			);
			return ()=>{
				unsubscribe();
			}
	},[])

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar_header}>
				<Avatar src={user?.photoURL}/>
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
				<SidebarChat addNewChat />
				{rooms.map(room => (
					<SidebarChat key={room.id} id={room.id} name={room.data.Name}></SidebarChat>
				))}
			</div>
		</div>
	);
}
export default Sidebar;
