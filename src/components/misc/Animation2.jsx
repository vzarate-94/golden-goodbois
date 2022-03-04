import React from "react";
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={0.5}
                style={{ width: '100%', height: '70%' }}
            />
        </div>
    )
}
export default Animation