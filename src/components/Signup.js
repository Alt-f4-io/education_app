import React, {useRef, useState} from 'react'
import './Signup.css'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
 
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordConfirmRef.current.value !== passwordConfirmRef.current.value) {
            return setError ("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
    <div className='body'>
        {error && <div className="alert-danger"><p>{error}</p></div>}
        {error && <p>password Failed</p>}
        <div className='card'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <div id="name" className="input-container">
                        <label>Name</label>
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
                
            </form>
            <button disabled={loading} className='button' type="submit">Sign up</button>
        </div>
        Already Have an Acount? Login
    </div>
  )
}