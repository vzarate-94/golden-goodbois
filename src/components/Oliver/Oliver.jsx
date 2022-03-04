import React, { useState } from 'react'
import imagesArr from '../../imageData'
import '../../App.css'

function Oliver() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img)

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl)
  }

  const images = imagesArr.map((image, i) => {
    return (
      <img
          style={{ border: bigImage === image.img ? "3px solid blue" : "" }}
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
      <h1>Oliver good boy!</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage}  id="bigImage" alt="bigImage"/>
      </div>
    </div>
  )
}

export default Oliver