import { Link, useNavigate } from "react-router-dom"
import React from 'react'
import './Login.css'
import { useState } from "react"
import { auth } from "./firebase"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://cdn.logo.com/hotlink-ok/logo-social.png'
                />
            </Link>

            <div className="login__containter">
                <h1>Sign-in</h1>
                <form>
                    <h5>Correo</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Ingresar</button>
                </form>

                <p>
                    AVISOS LEGALES
                </p>

                <button onClick={register} className="login__registerButton">Crea tu cuenta</button>
            </div>
        </div >
    )
}

export default Login