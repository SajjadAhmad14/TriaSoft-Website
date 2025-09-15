import Image from "next/image";
import React from "react";

function ContactUs() {
    const colors = [
        "from-blue-900 to-blue-700",
        "from-violet-900 to-violet-700",
        "from-indigo-900 to-indigo-700",
        "from-purple-900 to-purple-700",
    ];

    return (
        <section
            id="contact"
            className="w-full py-20 px-6 bg-gradient-to-b from-blue-950 to-blue-900 text-white flex flex-col items-center"
        >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Contact Us
            </h2>
            <p className="text-gray-300 max-w-2xl text-center mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                Get in touch with us today!
            </p>

            {/* Contact Area */}
            <div className="relative max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
                {/* Left banner */}
                <div className="flex justify-center items-center w-full md:w-1/2 h-[400px]">
                    <Image
                        src="/images/a.png"
                        alt="Contact us"
                        width={400}
                        height={400}
                        className="object-contain rounded-2xl shadow-lg mix-blend-screen"
                    />
                </div>

                {/* Right form */}
                <div className="flex items-center w-full md:w-1/2">
                    <div className="w-full bg-blue-950 backdrop-blur-sm px-8 py-12 rounded-2xl shadow-2xl border border-blue-800">
                        <h3 className="text-4xl text-blue-500 font-semibold mb-6">
                            Register Interest
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Use the form below to contact us. Please be as detailed and precise
                            as possible. Include your industry and any specific requests. To
                            help us get to know and serve you better, we thank you for first
                            giving us a good description of who you are. You can also send an
                            email, call us, or send us a WhatsApp to make an appointment.
                        </p>

                        {/* Form */}
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message here"
                                    className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 transition font-semibold shadow-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            {/* Team Member Boxes */}
            <div className="max-w-6xl w-full mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    "from-blue-950 to-blue-800",
                    "from-violet-950 to-violet-800",
                    "from-indigo-950 to-indigo-800",
                    "from-purple-950 to-purple-800",
                    "from-slate-950 to-slate-800",
                    "from-fuchsia-950 to-fuchsia-800",
                    "from-cyan-950 to-blue-800",
                    "from-rose-950 to-purple-800",
                ].map((color, i) => (
                    <div
                        key={i}
                        className={`p-6 rounded-2xl shadow-xl text-left min-h-[240px] flex flex-col justify-between
            bg-gradient-to-br ${color} 
            ${i % 2 === 1 ? "translate-y-8" : ""}`}
                    >
                        <p className="text-gray-200 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            feugiat, purus at tincidunt viverra.
                        </p>

                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/profile.jpg"
                                alt="Profile"
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-white"
                            />
                            <div>
                                <h4 className="font-semibold">John Doe</h4>
                                <p className="text-sm text-gray-300">Position</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default ContactUs;
