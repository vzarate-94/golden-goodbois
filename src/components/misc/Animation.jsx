import React from "react";
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div>
            <Lottie 
                id="lottie"
                loop
                animationData={props.animData}
                play
                speed={1}
            />
        </div>
    )
}
export default Animation