import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";



function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-blue-900/70 backdrop-blur-md shadow-md"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="mos.svg" alt="Logo" className="h-16 md:h-24" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10">
                    <a
                        href="#hero"
                        className="text-white hover:text-orange-500 font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="text-white hover:text-orange-500 font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#projects"
                        className="text-white hover:text-orange-500 font-medium"
                    >
                        Project
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-orange-500 font-medium"
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a href="#">
                        <button className="bg-blue-600 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-full">
                            Contact Us
                        </button>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <XMarkIcon className="w-8 h-8" />
                        ) : (
                            <Bars3Icon className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-900/90 backdrop-blur-md w-full px-6 py-4 flex flex-col space-y-4">
                    <a
                        href="#hero"
                        className="text-white font-medium hover:text-orange-500"
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="text-white font-medium hover:text-orange-500"
                    >
                        Services
                    </a>
                    <a
                        href="#projects"
                        className="text-white font-medium hover:text-orange-500"
                    >
                        Project
                    </a>
                    <a
                        href="#contact"
                        className="text-white font-medium hover:text-orange-500"
                    >
                        Contact Us
                    </a>
                    <a href="#">
                        <button className="w-full bg-blue-600 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-full">
                            Contact Us
                        </button>
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
