"use client";

import { useEffect, useRef } from "react";

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
                    gyroControls: true,
                    backgroundColor: 0x000000, // pure black
                    color: 0x0a3d66,           // dimmed neon blue lines
                    points: 20.0,
                    maxDistance: 30.0,
                    spacing: 18.0,
                    showDots: false,           // no bright dots
                    showLines: true,
                    lineWidth: 1.2,
                    minDistance: 15,
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
            className="relative w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-44 md:py-52 min-h-[1000px] text-white overflow-hidden"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/95 z-0 pointer-events-none"></div>

            {/* Left panel - text with dark background */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <div className="bg-black/70 px-8 py-8 rounded-xl">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6 max-w-lg">
                        Let’s Turn Your Ideas Into Reality
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg">
                        Whether you're a startup, a business, or an individual with a vision, we’ll
                        bring your digital project to life with speed, professionalism, and
                        creativity. Get in touch today and let’s build something extraordinary together!
                    </p>
                </div>
            </div>

            {/* Right panel - contact form */}
            <div className="relative z-10 w-full md:w-1/2 mt-20 md:mt-0 md:ml-16">
                <div className="w-full bg-black/85 backdrop-blur-md px-12 md:px-16 py-16 md:py-20 rounded-3xl shadow-2xl border border-white/10">
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-300 mb-10">
                        Fill out the form below and let’s discuss how we can bring your ideas
                        to life. Fast, professional, and tailored to your needs.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Company</label>
                            <input
                                type="text"
                                placeholder="Enter your company"
                                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Your message here"
                                className="w-full px-6 py-4 rounded-xl bg-gray-900/70 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition font-bold shadow-lg text-white text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                h2, p {
                    animation: fadeIn 1s ease forwards;
                }
            `}</style>
        </section>
    );
}
