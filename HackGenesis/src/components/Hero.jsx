import React from 'react';
import './CSS/Hero.css';
import Video from '../assets/Video.mp4';

const Hero = () => {
    return (
        <div>
            <div className="hero-main">
                <div className="left">
                    <h1 className='hero-title' >Hack Genesis'24</h1>
                    <p className='hero-date' >16 - 18 April 2024</p>
                </div>
                <div className="right">
                    <video autoPlay loop muted playsInline className='hero-video' src={Video}></video>
                </div>
            </div>
        </div>
    );
};

export default Hero;
