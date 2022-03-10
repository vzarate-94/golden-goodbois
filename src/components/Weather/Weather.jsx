import React from 'react'
import '../../App.css'
import Card from '../Card/Card'


function Weather() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()} on ${current.toLocaleTimeString()}`;


  return (
    <div className='weather-app'>
      <h1>Weather for {date}</h1>
      <div>
        <Card />
      </div>
    </div>
  )
}

export default Weather