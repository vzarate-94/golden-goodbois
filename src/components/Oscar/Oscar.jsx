import React, { useState } from 'react'
import oscarImagesArr from '../../assets/oscarData'
import Animation2 from '../misc/Animation2'
import nature from '../../assets/animation/nature.json'

import '../../App.css'

function Oscar() {
  const [bigImage, setBigImage] = useState(oscarImagesArr[0].img)

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl)
  }

  const images = oscarImagesArr.map((image, i) => {
    return (
      <img
          style={{ border: bigImage === image.img ? "3px solid #2a2a3c" : "3px solid white" }}
          onClick={() => handleClick(image.img)}
          src={image.img}
          alt={image.city}
          className={"thumb"}
          key={i}
        />
    )
  })
  
  return (
    <div>
      <h1 className='names'>Oscar Wilde Hyde!</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage}  id="bigImage" alt="bigImage"/>
      </div>
      <div>
      <div>
          <Animation2 animData={nature}></Animation2>
        </div>
      </div>
    </div>
  )
}

export default Oscar