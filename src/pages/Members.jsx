import React from 'react';

const Members = () => {
    const members = [
        {
            name: "Br. Sam Poovachal",
            role: "Singer",
            image: "/images/singer1.jpg" // Placeholder
        },
        {
            name: "Br. Asher Daniel James",
            role: "Keyboardist / Director",
            image: "/images/keyboard.jpg" // Placeholder
        },
        {
            name: "Sis. Anju James",
            role: "Singer",
            image: "/images/singer2.jpg" // Placeholder
        },
        {
            name: "Br. Reyan K Renjan",
            role: "Guitarist",
            image: "/images/guitarist.jpg" // Placeholder
        },
        {
            name: "Br. Jes John Saji",
            role: "Drummer",
            image: "/images/drum.jpg" // Specific image
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet the <span className="text-gold">Band</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The talented individuals behind the music of AJ Beats Pathanapuram.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                    {members.map((member, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gold/50 transition-all duration-300 group">
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-gold font-medium">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
