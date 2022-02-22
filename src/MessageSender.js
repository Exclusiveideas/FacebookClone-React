import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar, Snackbar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import db from './firebase.js';



const MessageSender = ({ initiateSnapshot }) => {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        //adding a post
        if (input) {

            await addDoc(collection(db, "posts"), {
                message: input,
                timestamp: serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl
            });

            setInput("");
            setImageUrl("");
            setMessage("Successfuly shared a post");
            handleClick();
            initiateSnapshot();
        } else {
            setMessage("Post message is required");
            handleClick();
        }
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user?.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind? ${user?.displayName}`} className='messageSender__input' />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Post
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'red' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'red' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            <Snackbar
                autoHideDuration={3000}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
            />
        </div>
    )
}

export default MessageSender