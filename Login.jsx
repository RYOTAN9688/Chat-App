import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import firebase from './config';



const Login = () => {
    const [email, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('logged In')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='e-mail'
                        id='e-mail'
                        name='e-mail'
                        placeholder='Email'
                        onChange={e => {
                            setLogin(e.target.value)
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
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to="/SignUp">Sign Up</Link>
        </>
    )
}

export default Login;