import React from "react";

function Project() {
    return (
        <section className="w-full py-40 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Intro Text */}
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-24">
                    We are passionate about helping businesses grow and succeed in the digital age.
                    We take pride in our work and strive to exceed your expectations every time.
                </p>

                {/* Stats Area in Card */}
                <div className="rounded-3xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md shadow-xl p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-lg mt-2 text-gray-200">Years of Experience</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">666+</h3>
                            <p className="text-lg mt-2 text-gray-200">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">555+</h3>
                            <p className="text-lg mt-2 text-gray-200">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-lg mt-2 text-gray-200">Awards Achieved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
