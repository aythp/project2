import React, { useState } from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/github-logo.png";

export default function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed bottom-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-300 ease-in-out ${isHovered ? 'h-24' : 'h-12'}`}
        >
            <div className="bg-gray-800 rounded-t-lg flex items-center justify-center p-5">
                <Link to="https://github.com/aythp/project2" target="_blank">
                    <img
                        src={GithubLogo}
                        alt="GitHub Logo"
                        className={`transition-all duration-300 ease-in-out ${isHovered ? 'w-12 h-12' : 'w-8 h-8'}`}
                    />
                </Link>
            </div>
        </div>
    );
}