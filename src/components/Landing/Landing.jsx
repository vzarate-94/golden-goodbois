import React from 'react'
import golden from '../../assets/animation/golden.json'
import Animation from '../misc/Animation'
import '../../App.css'

function Landing() {
  return (
    
    <div className='landing'>
        <div className='left-container'>
          <h1>Hello World!</h1>
        </div>

        <div className='right-container'>
          <Animation animData={golden}></Animation>
        </div>
      </div>
    
  )
}

export default Landing