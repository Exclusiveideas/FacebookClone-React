import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment'


const Post = ({ profilePic, image, username, timestamp, message}) => {
  return (
    <div className='post'>
        <div className='post__top' >
            <Avatar src={profilePic} className="post__avatar"/>
            <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{moment(timestamp).fromNow()}</p>
            </div>
        </div>
        <div className='post__bottom' >
            <p>{message}</p>
        </div>
        {image && <div className='post__image'>
            <img src={image} alt="post-image" />
        </div>}
        <div className='post__options'>
            <div className='post__option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className='post__option'>
                <ChatBubbleOutlinedIcon />
                <p>Comment</p>
            </div>
            <div className='post__option'>
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className='post__option'>
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div>
        </div>
    </div>
  )
}

export default Post