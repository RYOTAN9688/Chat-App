import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='e-mail'
                        id='e-mail'
                        name='e-mail'
                        placeholder='Email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='passWord'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
                <Link to="/login">Login</Link>
            </form>
        </>
    )
};

export default SignUp;



