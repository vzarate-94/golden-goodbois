import React, { useState } from 'react'
import oliverImagesArr from '../../assets/oliverData'
import Animation2 from '../misc/Animation2'
import nature from '../../assets/animation/nature.json'

import '../../App.css'

function Oliver() {
  const [bigImage, setBigImage] = useState(oliverImagesArr[0].img)

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl)
  }

  const images = oliverImagesArr.map((image, i) => {
    return (
      <img
          style={{ border: bigImage === image.img ? "3px solid #2a2a3c" : "2px solid white" }}
          onClick={() => handleClick(image.img)}
          src={image.img}
          alt={image.city}
          className={"thumb"}
          key={i}
        />
    )
  })
  
  return (
    <div className='dog-pages'>
      <h1 className='names'>Oliver Twist Hyde!</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage}  id="bigImage" alt="bigImage"/>
      </div>
      <div>
          <Animation2 animData={nature}></Animation2>
        </div>
    </div>
  )
}

export default Oliver