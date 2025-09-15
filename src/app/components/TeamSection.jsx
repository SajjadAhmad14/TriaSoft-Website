import React from "react";

function TeamSection() {
    const members = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        name: `John Doe ${i + 1}`,
        role: "Developer",
        img: `https://i.pravatar.cc/150?img=${i + 10}`, // random avatars
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet."
    }));

    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-blue-950 via-indigo-900 to-purple-900">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {members.map((member, i) => (
                    <div
                        key={member.id}
                        className={`
              relative rounded-3xl p-6 shadow-lg text-white 
              bg-gradient-to-br 
              ${i % 3 === 0 ? "from-blue-700 to-indigo-700" : ""}
              ${i % 3 === 1 ? "from-indigo-700 to-purple-700" : ""}
              ${i % 3 === 2 ? "from-purple-700 to-blue-700" : ""}
              transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl
              ${i % 2 === 1 ? "mt-10" : "mt-0"}  // staggered chess effect
            `}
                    >
                        {/* Description */}
                        <p className="text-gray-200 mb-6">{member.text}</p>

                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                            />
                            <div>
                                <h4 className="font-semibold text-lg">{member.name}</h4>
                                <p className="text-sm text-gray-300">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamSection;
