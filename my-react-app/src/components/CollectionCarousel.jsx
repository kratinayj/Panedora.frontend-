import React, { useState, useEffect } from 'react';
import './CollectionCarousel.css';

const CollectionCarousel = ({ items: brownies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered || isModalOpen || !brownies) return;
        const timer = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered, isModalOpen, brownies]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === brownies.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? brownies.length - 1 : prev - 1));
    };

    const getPrevIndex = () => (currentIndex === 0 ? brownies.length - 1 : currentIndex - 1);
    const getNextIndex = () => (currentIndex === brownies.length - 1 ? 0 : currentIndex + 1);

    // --- NEW: The "Word Lock" Title Renderer ---
    const renderCinematicName = (name) => {
        if (!name) return null;

        // Find where the first space is to isolate the first word
        const firstSpaceIndex = name.indexOf(' ');
        const firstWord = firstSpaceIndex === -1 ? name : name.substring(0, firstSpaceIndex);
        const restOfWords = firstSpaceIndex === -1 ? '' : name.substring(firstSpaceIndex);

        const firstLetter = firstWord.charAt(0);
        const restOfFirstWord = firstWord.slice(1);

        return (
            <h2 className="cinematic-title">
                {/* This span permanently glues the cursive letter to the rest of the FIRST word */}
                <span className="word-lock">
                    <span className="first-letter">{firstLetter}</span>
                    <span className="rest-of-name">{restOfFirstWord}</span>
                </span>
                {/* The rest of the title wraps naturally on its own */}
                <span className="rest-of-name">{restOfWords}</span>
            </h2>
        );
    };

    if (!brownies || brownies.length === 0) return null;

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="carousel-track">
                {brownies.map((item, index) => {
                    let slideClass = "slide";
                    if (index === currentIndex) slideClass += " active";
                    else if (index === getPrevIndex()) slideClass += " prev";
                    else if (index === getNextIndex()) slideClass += " next";

                    return (
                        <div className={slideClass} key={index}>
                            <div className="desktop-text left-text">
                                {renderCinematicName(item.name)}
                            </div>

                            <div className="image-wrapper" onClick={() => {
                                if (index === getPrevIndex()) handlePrev();
                                if (index === getNextIndex()) handleNext();
                            }}>
                                <img src={item.image} alt={item.name} className="brownie-img" />
                                <div className="mobile-overlay">
                                    <div className="mobile-title-anchor">
                                        {renderCinematicName(item.name)}
                                    </div>
                                    <button className="tasting-notes-btn" onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}>
                                        Tasting Notes
                                    </button>
                                </div>
                            </div>

                            <div className="desktop-text right-text">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="control-bar">
                <button className="nav-arrow left-arrow" onClick={handlePrev}>
                    <span className="glimmer"></span>&lt;
                </button>
                <div className="progress-dots">
                    {brownies.map((_, index) => (
                        <div className={`dot-ring ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <span className="dot"></span>
                        </div>
                    ))}
                </div>
                <button className="nav-arrow right-arrow" onClick={handleNext}>
                    <span className="glimmer"></span>&gt;
                </button>
            </div>

            <div className={`modal-backdrop ${isModalOpen ? 'open' : ''}`} onClick={() => setIsModalOpen(false)}>
                <div className="velvet-card" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                    <div className="modal-title">{renderCinematicName(brownies[currentIndex].name)}</div>
                    <div className="velvet-scroll-area"><p>{brownies[currentIndex].desc}</p></div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCarousel;