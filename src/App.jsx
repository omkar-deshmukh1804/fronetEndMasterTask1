import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="main--container">
      <div className='card--container'>
        <div className='qr--container'>
          <img src='/image-qr-code.png' className='qr--image' />
        </div>

        <div className='text--conatiner'>
          <h3>Improve your front-end skills by building projects</h3>
          <h6>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h6>
        </div>

      </div>
    </div> 
  )
  
}

export default App
