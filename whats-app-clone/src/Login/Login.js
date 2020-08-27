import React from 'react';
import styles from './Login.module.css'
import { Button } from '@material-ui/core';
import icon from '../assets/whatsapp.png'
import { auth, provider } from '../Firebase';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((res) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <img src={icon} alt="icon whats app"></img>
                <div className={styles.login_text}>
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type ="submit" onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
