import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { db } from "./firebase";
import logo from './images/login-logo.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                    updateFirebase(email, auth)
                }
            })
            .catch(error => alert(error.message))
    }

    function updateFirebase(email, auth){
            let data = {
                email: email
            }
            // it successfully created a new user with email and password
                db.collection("users").doc(auth.user.uid).set(data);
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo"
                    src={logo}
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button type='submit'
                        onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By singing up, you agree to the website terms and conditions
                </p>
                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}
export default Login