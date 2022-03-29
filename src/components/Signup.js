import React, {useRef, useState} from 'react'
import './Signup.css'
import { useAuth } from '../contexts/AuthContext'
import { Link,  } from 'react-router-dom'


export default function Signup() {
    
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordConfirmRef.current.value !== passwordRef.current.value) {
            return setError ("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
            setSuccess('Success. Check your inbox for futher instructions.')
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
    <div className='body'>
        <div className='card'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            {error && <div id="hide" className="alert-danger"><p>{error}</p></div>}
            {success && <div id="hide" className='alert-success'><p>{success}</p></div>}
                <div className='form-container'>
                    <div id="name" className="input-container">
                        <label>Full Name</label>
                        <input className="input-field" type="name" ref={nameRef} required />
                    </div>
                    <div id="email" className="input-container">
                        <label>Email</label>
                        <input className="input-field" type="email" ref={emailRef} required />
                    </div>
                    <div id="password" className="input-container">
                        <label>Password</label>
                        <input className="input-field" type="password" ref={passwordRef} required />
                    </div>
                    <div id="password-confirm" className="input-container">
                        <label>Confirm Password </label>
                        <input className="input-field" type="password" ref={passwordConfirmRef} required />
                    </div>
                </div>
                <button disabled={loading} className='button' type="submit">Sign up</button>
            </form>
        </div>
        <div className='link'>
            Don't have an account? <Link to="/login">Login</Link>
        </div>
    </div>
  )
}
