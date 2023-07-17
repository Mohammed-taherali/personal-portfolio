import React from "react";
import Tilt from "react-parallax-tilt";

export default function TiltComponent() {
    const handleMouseEnter = (event) => {
        event.currentTarget.tilt.reset();
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.tilt.destroy();
    };

    return (
        <div className="tilt-container">
            <Tilt
                glareEnable={false}
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                perspective={3000}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src="./mtc-animated.png" className="animated-img" alt="Tilted Image" />
            </Tilt>
        </div>
    );
}
