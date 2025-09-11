import React from 'react'
import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-blue-900/70 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <img src="mos.svg" alt="Logo" className="h-24" />
                </div>

                {/* Middle: Navbar */}
                <nav className="hidden md:flex space-x-10">
                    <a href="#hero" className="text-white hover:text-orange-500 font-medium">Home</a>
                    <a href="#about" className="text-white hover:text-orange-500 font-medium">Services</a>
                    <a href="#services" className="text-white hover:text-orange-500 font-medium">Project</a>
                    <a href="#portfolio" className="text-white hover:text-orange-500 font-medium">About Us</a>
                </nav>

                {/* Right: Contact Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <button className="bg-blue-600 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-4xl">
                            Contact Us
                        </button>
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Navbar