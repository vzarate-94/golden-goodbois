import React from 'react'
import golden from '../../assets/animation/golden.json'
import Animation from '../misc/Animation'
import '../../App.css'

function Landing() {
  return (
    
    <div className='landing'>
        <div className='left-container'>
          <div className='intro'>
            <h1>Hello!</h1>
            <h2>Click on either Oliver or Oscar and enter a world of pure cuteness and cuddleness! </h2>
            <h2>They wont bite!</h2>
          </div>
        </div>

        <div className='right-container'>
          <Animation animData={golden}></Animation>
        </div>
      </div>
    
  )
}

export default Landing