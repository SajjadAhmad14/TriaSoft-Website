"use client";

import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

export default function ContactUs() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const loadScripts = async () => {
            if (!window.THREE) {
                const threeScript = document.createElement("script");
                threeScript.src =
                    "https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js";
                threeScript.async = true;
                document.body.appendChild(threeScript);
                await new Promise((res) => (threeScript.onload = res));
            }

            if (!window.VANTA) {
                const vantaScript = document.createElement("script");
                vantaScript.src =
                    "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
                vantaScript.async = true;
                document.body.appendChild(vantaScript);
                await new Promise((res) => (vantaScript.onload = res));
            }

            if (isMounted && !vantaEffect.current && window.VANTA) {
                vantaEffect.current = window.VANTA.NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    backgroundColor: 0x050715, // darker base
                    color: 0x0a1a3f,           // very subtle lines
                    points: 15.0,
                    maxDistance: 20.0,
                    spacing: 20.0,
                    showDots: false,
                    showLines: true,
                    lineWidth: 0.5,
                    minDistance: 12,
                    scale: 1.0,
                    scaleMobile: 1.0,
                });
            }
        };

        loadScripts();

        return () => {
            isMounted = false;
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, []);

    return (
        <section
            ref={vantaRef}
            id="contact"
            className="relative w-full min-h-[700px] py-24 md:py-36 flex items-center justify-center overflow-hidden text-white"
        >
            {/* Dark overlay above animation */}
            <div className="absolute inset-0 bg-black/70 z-1 pointer-events-none"></div>

            {/* Floating abstract shapes */}
            <div className="absolute -bottom-16 left-10 w-48 h-48 rounded-full bg-purple-700/20 blur-[120px] animate-pulse" />
            <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-blue-500/20 blur-[180px] animate-pulse" />
            <div className="absolute bottom-0 right-1/3 w-32 h-32 rounded-full bg-pink-600/20 blur-[100px] animate-pulse" />

            <div className="relative z-10 max-w-6xl w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left panel: text content */}
                <div className="flex flex-col items-start justify-center space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white">
                        Bring Your Ideas <span className="text-blue-400">to Life</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                        Whether you're a startup, business, or visionary, we craft digital
                        projects with creativity, speed, and professionalism. Let’s create
                        something amazing together.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <div className="w-20 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-10 h-1 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                        <div className="w-16 h-1 bg-pink-500 rounded-full animate-pulse delay-400"></div>
                    </div>
                </div>

                {/* Right panel: compact tilted form */}
                <Tilt
                    tiltEnable={true}
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    className="w-full bg-gradient-to-r from-[#050715]/95 to-[#0a0f20]/95 backdrop-blur-md px-6 md:px-8 py-10 rounded-2xl shadow-2xl border border-white/10"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
                        Let’s Talk!
                    </h3>
                    <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
                        Share your vision, and let’s build something extraordinary.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm"
                        />
                        <textarea
                            rows={3}
                            placeholder="Your Message"
                            className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transition font-bold shadow-lg text-white text-base"
                        >
                            Send Message
                        </button>
                    </form>
                </Tilt>
            </div>

        
        </section>

    );
}
