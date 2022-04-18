import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='https://i.pinimg.com/originals/b5/c6/d3/b5c6d38e41468c794b76c30f8e0aa919.jpg' title='Roberto García' />
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarRow Icon={PeopleIcon} title='Friends' />     
        <SidebarRow Icon={ChatBubbleIcon} title='Messenger' />   
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos' />        
    </div>
  )
}

export default Sidebar