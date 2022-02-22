import React, { useEffect, useState } from 'react'
import './Feed.css';
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Feed = () => {
  const [post, setPost] = useState([]);
  const test = [];

  useEffect(() => {
    initiateSnapshot()

    return () => initiateSnapshot();
  }, []);

  const initiateSnapshot = () => {
     const q = query(collection(db, 'posts'), orderBy("timestamp", "desc"));


    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        test.push(doc)
      });
      setTimeout(() => {
        setPost(test)
      }, 3000)
    })
    return unsubscribe
  }

  function FacebookCircularProgress(props) {
    return (
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender initiateSnapshot={initiateSnapshot}/>

      {post.length < 1 ? (
        <Box sx={{ flexGrow: 1, p:5}}>
          <FacebookCircularProgress />
        </Box>
      ) : (
        post.map((post, i) => (
          <Post
            key={i}
            profilePic={post._document?.data?.value?.mapValue?.fields?.profilePic?.stringValue}
            message={post._document?.data?.value?.mapValue?.fields?.message?.stringValue}
            timestamp={post._document?.data?.value?.mapValue?.fields?.timestamp?.timestampValue}
            username={post._document?.data?.value?.mapValue?.fields?.username?.stringValue}
            image={post._document?.data?.value?.mapValue?.fields?.image?.stringValue}
          />
        )))}
    </div>
  )
}

export default Feed