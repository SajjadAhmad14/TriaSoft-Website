"use client";
import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const navItems = ["Home", "Services", "Projects", "Team"];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-gradient-to-r from-[#0a0f1f]/90 to-[#1a0f2f]/90 backdrop-blur-xl shadow-2xl h-20 border-b border-cyan-500/20"
                    : "bg-transparent h-28"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex-shrink-0 transition-all duration-500 cursor-pointer" onClick={scrollToTop}>
                    <img
                        src="logos/s.svg"
                        alt="Logo"
                        className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14 md:h-14"
                            } drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]`}
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group text-white/90 hover:text-white font-semibold transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 rounded-full blur-sm group-hover:opacity-70 transition-opacity duration-300"></span>
                        </a>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <button className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-violet-700 hover:from-blue-500 hover:to-violet-500 text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300 group">
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span className="absolute inset-0 border border-cyan-500/50 rounded-full animate-pulse opacity-40"></span>
                        </button>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none z-50 relative"
                    >
                        {menuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f1f]/95 to-[#1a0f2f]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-10 transform transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
            >
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors duration-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
                <a href="#contact">
                    <button className="bg-gradient-to-r from-blue-700 to-violet-700 hover:from-blue-500 hover:to-violet-500 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300">
                        Contact Us
                    </button>
                </a>
            </div>
        </header>
    );
}

export default Navbar;
