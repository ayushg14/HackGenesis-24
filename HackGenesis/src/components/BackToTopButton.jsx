import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';
import { FaCircleArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scrollHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollDistance = scrollHeight - windowHeight;
            const scrollPercentage = (scrollTop / scrollDistance) * 100;

            setIsVisible(scrollPercentage > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`back-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <FaCircleArrowUp />
        </button>
    );
};

export default BackToTopButton;
