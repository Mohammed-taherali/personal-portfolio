import React from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export default function MyParticles() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <Particles
            className="particles"
            id="tsparticles"
            init={particlesInit}
            options={{
                "name": "Parallax",
                "fullScreen": {
                    "enable": true,
                    "zIndex": -100
                },
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                        }
                    },
                    "color": {
                        "value": "#000"
                    },
                    "shape": {
                        "type": "circle",
                    },
                    "opacity": {
                        "value": {
                            min: 0.1,
                            max: 0.5,
                        },
                        "animation": {
                            "enable": true,
                            "speed": 3,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": {
                            min: 1,
                            max: 10,
                        },
                        "animation": {
                            "enable": true,
                            "speed": 20,
                            "sync": false
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 10,
                        "color": "#808080",
                        "opacity": 0.4,
                        "width": 1,
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab",
                            "parallax": {
                                "enable": true,
                                "smooth": 10,
                                "force": 60,
                            }
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "links": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 0.8,
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": "#f7f7f7",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    )
}