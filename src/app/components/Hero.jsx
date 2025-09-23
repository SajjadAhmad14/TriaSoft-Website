"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
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
                    "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
                vantaScript.async = true;
                document.body.appendChild(vantaScript);
                await new Promise((res) => (vantaScript.onload = res));
            }

            if (isMounted && !vantaEffect.current && window.VANTA) {
                vantaEffect.current = window.VANTA.GLOBE({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    backgroundColor: 0x020205, // deep bluish-black
                    color: 0x1e90ff, // neon blue
                    size: 1.0,
                    scale: 1.4,
                    scaleMobile: 1.0,
                    points: 10.0,
                    spacing: 18.0,
                    amplitude: 1.8,
                    shine: 0.2,
                    waveSpeed: 1.0,
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
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black"
        >
            {/* Dark radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-1 pointer-events-none" />

            {/* Extra subtle vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.75)_0%,transparent_70%)] z-1 pointer-events-none" />

            <motion.div
                className="relative z-10 max-w-4xl px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 
          text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 
          drop-shadow-[0_0_15px_rgba(30,144,255,0.7)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Your Trusted Partner in Digital Innovation
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    We deliver custom software, web, and mobile solutions that drive growth
                    and transform businesses.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                >
                    <a
                        href="#contact"
                        className="relative px-10 py-4 rounded-full text-white font-semibold shadow-lg 
            bg-gradient-to-r from-blue-700 via-blue-600 to-violet-700 
            hover:from-blue-500 hover:to-violet-500 transition-transform duration-300"
                    >
                        <span className="relative z-10">Work With Us</span>
                        <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl opacity-0 animate-pulse"></span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
