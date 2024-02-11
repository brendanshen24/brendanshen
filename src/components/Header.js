/* src/components/Header.js */
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="profile-text-container">
                    <div className="profile-picture">
                        <img src="pro.jpg" alt="Profile" />
                    </div>
                    <div className="header-logo">Brendan Shen</div>
                </div>
                <nav>
                    <ul className="header-nav">
                        <li><a href="resume.pdf">Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/brendan-shen/" target="_blank" rel="noopener noreferrer"><img src="li.png" alt="LinkedIn" /></a></li>
                        <li><a href="https://www.instagram.com/c41brendan/" target="_blank" rel="noopener noreferrer"><img src="ig.png" alt="Instagram" /></a></li>
                        <li><a href="https://github.com/brendanshen24" target="_blank" rel="noopener noreferrer"><img src="gh.png" alt="GitHub" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
