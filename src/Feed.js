import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
          profilePic='{profilePic}'
          message='{message}'
          timestamp= '{timestamp}'
          username= '{username}'
          image= '{image}'
        />
        <Post 
          profilePic='{profilePic}'
          message='{message}'
          timestamp= '{timestamp}'
          username= '{username}'
          image= '{image}'
        />
    </div>
  )
}

export default Feed