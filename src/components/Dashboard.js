import React from 'react'
import './Dashboard.css'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
    <div className='nav'>
      <h3>EZ Education</h3>
      <FaUserCircle className='icon'/>
    </div>
    <div className='body'>
      <Link to="/quiz">
      <div className='quizes'>
        <div className='quiz'>
          <h4>Arithmetic Test</h4>
          <p> A Test which will test you on basic Arithmetic skills</p>
        </div>
      </div>
      </Link>
      
    </div>
    </>
  )
}
