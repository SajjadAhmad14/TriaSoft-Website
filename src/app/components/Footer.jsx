"use client";
import React from "react";
import { Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="relative w-full text-gray-300 pt-24 pb-12"
            style={{
                background: "radial-gradient(circle at top right, #0a0f24 0%, #01030a 100%)",
            }}
        >
            {/* Background abstract shapes */}
            <div className="absolute inset-0  -z-10">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-0 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-3xl animate-float delay-2000"></div>
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 relative z-10">
                {/* Left Section */}
                <div className="w-full md:w-3/5 max-w-md">
                    {/* Logo + Company Name inside glowing card */}
                    <div className="flex items-center gap-4 mb-8">
                        <img src="logos/s.svg" alt="Logo" className="h-16 w-16 object-contain" />
                        <h2 className="text-2xl font-bold text-white tracking-wide">Tria Soft</h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed mb-8 text-gray-200">
                        We're a team of experienced designers, developers, and marketers,
                        passionate about delivering exceptional digital solutions.
                    </p>

                    {/* Email */}
                    <div className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition">
                        <Mail className="w-5 h-5" />
                        <p className="text-sm font-medium">info@itflow.com</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/5 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    {/* Menu */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition">Project</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Dribbble</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Behance</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-gray-800 pt-6 text-center relative z-10">
                <p className="text-sm text-gray-400">
                    Copyright © 2025, by <span className="text-white font-medium">It Flow</span>. All rights reserved.
                </p>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .delay-1000 { animation-delay: 1s; }
                .delay-2000 { animation-delay: 2s; }
            `}</style>
        </footer>
    );
}

export default Footer;
