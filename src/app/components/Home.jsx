import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function Home() {
    return (
        <section
            id="hero"
            className="w-full h-screen flex flex-col justify-center items-center text-center text-text-light px-4"
        >
            {/* Big Text */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Smart Choices
                <br />
                For Your Business Growth
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-text-dark max-w-xl mb-8">
                We're a team of experienced designers, developers, and marketers,
                passionate about delivering exceptional digital solutions.
            </p>

            {/* Contact Button */}
            <a href="#contact">
                <button className="flex items-center gap-2 bg-accent bg-blue-600 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-4xl">
                    Contact Us
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </a>
        </section>
    )
}

export default Home