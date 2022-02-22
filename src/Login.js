import { Button } from '@mui/material';
import React from 'react'
import './Login.css';
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from './firebase';
import { useStateValue } from './StateProvider';


const Login = () => {
    const [{user}, dispatch] = useStateValue();
    const auth = getAuth();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({
                    type: "SET_USER",
                    user: result.user
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='login'>
            <div className='login__log'>
                <img src="https://cdn.pixabay.com/photo/2020/07/21/02/07/facebook-5424833_960_720.png" alt="fb__logo-image" />
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019.jpg" alt="fb__logo-text" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login