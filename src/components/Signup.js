import React, {useRef, } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { useState } from 'react'

export default function Signup() {
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault()
    
        try {
          setLoading(true)
          await supabase.auth.signUp(
            {
              email: emailRef.current.value,
              password: passwordRef.current.value,
            },
            {
              data: { 
                first_name: firstNameRef.current.value, 
                last_name: lastNameRef.current.value,
              }
            }
          )
          
        } catch {
            setError('Error')
        } finally {
          setLoading(false)
        }
      }

    return (
    <div className='body'>
        <div className='card'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className='form-container'>
                {error && <div className="alert-danger"><p>{error}</p></div>}
                    <div id="first-name" className="input-container">
                        <label>First Name</label>
                        <input className="input-field" ref={firstNameRef} required />
                    </div>
                    <div id="last-name" className="input-container">
                        <label>Last Name</label>
                        <input className="input-field" ref={lastNameRef} required />
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
            Already Have an Acount? <Link to="/login">Login</Link>
        </div>
    </div>
  )
}