import React from 'react'
import { Link } from 'react-router-dom'
import golden from '../../assets/animation/golden.json'
import Animation from '../misc/Animation'
import '../../App.css'

function Landing() {
  return (
    
    <div className='landing'>
        <div className='left-container'>
          <span className='intro'>
              <h1>Hello!</h1>
              <h2>Click on either Oliver or Oscar and enter a world of pure cuteness and cuddleness! </h2>
              <h2>They wont bite!</h2>
                <div className="d-grid gap-2">
                  <Link to='/oliver'>
                      <button className="btn oliver-btn" type="button"><strong>Oliver</strong></button>
                  </Link>
                  <Link to='/oscar'>
                      <button className="btn oscar-btn" type="button"><strong>Oscar</strong></button>
                  </Link>
                  <Link to='/weather'>
                      <button className="btn oscar-btn" type="button"><strong>Weather</strong></button>
                  </Link>
                </div>
          </span>
        </div>
        <div className='right-container'>
          <Animation animData={golden}></Animation>
        </div>
    </div>
  )
}

export default Landing