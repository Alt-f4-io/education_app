import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { FaGoogle } from 'react-icons/fa'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, googleLogin } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      if(auth.currentUser.emailVerified){
      navigate("/home")
      } else{
        setError("Email not verified")
      }
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  const googleAuth = () => {
    googleLogin()
    navigate('/home')
  }


    return (
    <div className='body'>
        <div className='card'>
            <h2>Login</h2>
            {error && <div className="alert-danger"><p>{error}</p></div>}
            <form onSubmit={handleSubmit}>
            <div className='google-container'>
                <FaGoogle className='google' onClick={googleAuth} />
                <h4>Sign in with google</h4>
            </div>
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
                <button disabled={loading} className='button' type="submit">Login</button>
            </form>

        </div>
        <div className='link'>
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}