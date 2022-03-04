import React, {useRef} from 'react'
import './Signup.css'

export default function Signup() {
    
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
    <div className='body'>
        <div className='card'>
            <h2>Sign Up</h2>
            <form>
                <div className='form-container'>
                    <div className="input-container">
                        <label>Name</label>
                        <input className="input-field" type="name" ref={nameRef} required />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input className="input-field" type="email" ref={emailRef} required />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input className="input-field" type="password" ref={passwordRef} required />
                    </div>
                    <div className="input-container">
                        <label>Confirm Password </label>
                        <input className="input-field" type="password" ref={passwordConfirmRef} required />
                    </div>
                </div>
                <button className='button' type="submit">Sign up</button>
            </form>
        </div>
        Already Have an Acount? Login
    </div>
  )
}
