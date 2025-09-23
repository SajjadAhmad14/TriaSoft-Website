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
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-gradient-to-r from-[#0a0f1f]/95 to-[#1a0f2f]/95 backdrop-blur-lg shadow-lg h-20"
                    : "bg-transparent h-28"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex-shrink-0 transition-all duration-500">
                    <img
                        src="mos.svg"
                        alt="Logo"
                        className={`transition-all duration-500 ${scrolled ? "h-12" : "h-16 md:h-20"
                            }`}
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10">
                    {["Home", "Services", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-white/90 hover:text-white font-medium transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <button className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-violet-700 hover:from-blue-500 hover:to-violet-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300">
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-violet-400/30 blur-xl opacity-0 hover:opacity-100 transition-opacity"></span>
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
                <div className="md:hidden bg-gradient-to-b from-[#0a0f1f]/95 to-[#1a0f2f]/95 backdrop-blur-lg w-full px-6 py-6 flex flex-col space-y-6 animate-fadeIn">
                    {["Home", "Services", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white font-medium hover:text-orange-500 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact">
                        <button className="w-full bg-gradient-to-r from-blue-700 to-violet-700 hover:from-blue-500 hover:to-violet-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                            Contact Us
                        </button>
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
