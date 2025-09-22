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
                    backgroundColor: 0x020205, // darker bluish
                    color: 0x1e90ff, // neon blue points
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
            {/* Darker overlay */}
            <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none" />

            <motion.div
                className="relative z-10 max-w-3xl px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Your Trusted Partner in Digital Innovation
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
                    style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    We deliver custom software, web, and mobile solutions that drive growth and transform businesses.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.07, rotate: 1 }}
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow-lg hover:shadow-blue-500/70 transition-transform"
                    >
                        Work With Us
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
