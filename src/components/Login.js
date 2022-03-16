import React, { useRef } from "react"
import { Link } from "react-router-dom"
import './Login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

    return (
    <div className='body'>
        <div className='card'>
            <h2>Login</h2>
            <form>
                <div className='form-container'>
                    <div id="email" className="input-container">
                        <label>Email</label>
                        <input className="input-field" type="email" ref={emailRef} required />
                    </div>
                    <div id="password" className="input-container">
                        <label>Password</label>
                        <input className="input-field" type="password" ref={passwordRef} required />
                    </div>
                </div>
                <button className='button' type="submit">Login</button>
            </form>

        </div>
        <div className='link'>
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}