import React, { useState, useEffect } from 'react';
import folder from '../assets/folder.png';
import NewScreen from './NewScreen';
import Project from './Project';

const iconMap = {
    'my projects': folder
};

export default function Icon({ alt, title, link }) {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(0); // Track current screen
    const [projectsPerPage, setProjectsPerPage] = useState(2); // Default to 2 for mobile

    const projects = [
        {
            link: "https://github.com/mattp532/Composerdle",
            title: "Composerdle",
            languages: ["React JS", "Express JS", "PostgreSQL"],
            description: "Puzzle game that picks a random composer every day, challenging users to guess based on categorical hints"
        },
        {
            link: "https://github.com/mattp532/Lingify",
            title: "Lingify",
            languages: ["React JS", "Tailwind CSS"],
            description: "An online quiz platform that helps you practice a new language by providing common English phrases and their translations"
        },
        {
            link: "https://github.com/mattp532/PokeStudy",
            title: "PokeStudy",
            languages: ["Javascript", "HTML/CSS"],
            description: "A fun and interactive study timer that lets you collect and save pokemon based on complete study sessions"
        }

    ];

    // Detect screen size and adjust projectsPerPage accordingly
    const updateProjectsPerPage = () => {
        if (window.innerWidth <= 768) {
            setProjectsPerPage(2); // Mobile: 2 projects per page
        } else {
            setProjectsPerPage(6); // Laptop/Desktop: 6 projects per page
        }
    };

    // Update projectsPerPage when window resizes
    useEffect(() => {
        updateProjectsPerPage(); // Initialize
        window.addEventListener('resize', updateProjectsPerPage); // Listen to resize
        return () => window.removeEventListener('resize', updateProjectsPerPage); // Clean up on unmount
    }, []);

    function handleClick() {
        setIsBoxVisible(!isBoxVisible);
    }

    const goToNextScreen = () => {
        if (currentScreen < Math.ceil(projects.length / projectsPerPage) - 1) {
            setCurrentScreen(currentScreen + 1);
        }
    };

    const goToPrevScreen = () => {
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const currentProjects = projects.slice(
        currentScreen * projectsPerPage,
        (currentScreen + 1) * projectsPerPage
    );

    return (
        <>
            <div style={{ width: "60%" }} className="iconBox" onClick={handleClick}>
                <img src={iconMap[title.toLowerCase()]} alt={alt} />
                <p
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '11px',
                        color: '#fff',
                        marginTop: "4px",
                        fontWeight: "300",
                        textShadow: '0.9px 0.9px 0px black, -0.9px -0.9px 0px black, 0.9px -0.9px 0px black, -0.9px 0.9px 0px black',
                    }}
                >
                    {title}
                </p>
            </div>

            {isBoxVisible && (
                <NewScreen styles={{
                    flexDirection: "column"
                }}
                topBarText="My Projects" exitClick={handleClick}>
                    <div
                        style={{
  
                            display: "grid",
                            gridGap: "25px",
                        }}
                        className="ProjectGrid"
                    >
                        {currentProjects.map((project, index) => (
                            <Project
                                key={index}
                                link={project.link}
                                title={project.title}
                                languages={project.languages}
                                description={project.description}
                            />
                        ))}
                    </div>

                    <div className="navigation-arrows">
                        <button onClick={goToPrevScreen} disabled={currentScreen === 0}>
                            ←
                        </button>
                        <button
                            onClick={goToNextScreen}
                            disabled={currentScreen === Math.ceil(projects.length / projectsPerPage) - 1}
                        >
                            →
                        </button>
                    </div>
                </NewScreen>
            )}
        </>
    );
}
