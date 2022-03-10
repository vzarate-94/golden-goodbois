import React, {useState, useEffect} from 'react'
import '../../App.css'

function Card() {

  useEffect(() => {
    fetchWeather()
  },[])

  const [forecast, setForcast] = useState([])

  const fetchWeather = async () => {
    const data = await fetch('https://api.weather.gov/gridpoints/LWX/36,78/forecast')
  

  const forecast = await data.json()
  console.log(forecast.properties.periods)
  setForcast(forecast.properties.periods)
  }

  return (
    <div className='weather'>
      {forecast.map(day => (
        <div className='card'>
          <h4>{day.name}</h4>
          <h3>{day.shortForecast}</h3>
          <h4>{day.temperature}{'\u00b0'} {day.temperatureUnit}</h4>
          <img className="icon" src={day.icon} alt="" />
        </div>
      ))}
      
    </div>
  )
}

export default Card