import React from "react";
import { Mail, Building2 } from "lucide-react";

function Footer() {
    return (
        <footer className="w-full bg-gray-950 text-gray-300 py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
                {/* Left Section */}
                <div className="w-full md:w-3/5 max-w-md">
                    {/* Logo + Company Name inside fancy card */}
                    <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-2xl shadow-lg p-4 mb-8">
                        <img src="mos.svg" alt="Logo" className="h-16 w-16 object-contain" />
                        <h2 className="text-2xl font-bold text-white tracking-wide">
                            Tria Soft
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed mb-8 text-gray-200">
                        We're a team of experienced designers, developers, and marketers,
                        passionate about delivering exceptional digital solutions.
                    </p>

                    {/* Email */}
                    <div className="flex items-center gap-3 text-gray-200">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <p className="text-sm font-medium">info@itflow.com</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/5 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    {/* Menu */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#projects" className="hover:text-blue-400">Project</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400">Dribbble</a></li>
                            <li><a href="#" className="hover:text-blue-400">Behance</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-gray-800 pt-6 text-center">
                <p className="text-sm text-gray-400">
                    Copyright © 2025, by <span className="text-white font-medium">It Flow</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
