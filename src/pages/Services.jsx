import React from 'react';
import { Music, Heart, Users, Mic } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Wedding Choir",
            description: "Make your special day even more memorable with our angelic wedding choir. We provide a beautiful musical backdrop for your holy matrimony.",
            icon: <Heart size={48} className="text-gold" />,
            image: "/images/23.jpg"
        },
        {
            title: "Funeral Choir",
            description: "Providing comforting and solemn music to honor the memory of your loved ones. We bring peace and hope through our songs during difficult times.",
            icon: <Music size={48} className="text-gold" />,
            image: "/images/3.jpg"
        },
        {
            title: "Convention Choir",
            description: "Powerful praise and worship for conventions and spiritual gatherings. We lead the congregation in uplifting songs that glorify God.",
            icon: <Users size={48} className="text-gold" />,
            image: "/images/6.jpg"
        },
        {
            title: "Open Air Meeting",
            description: "Engaging open-air meetings with powerful worship and messages. We bring the gospel to the streets and communities.",
            icon: <Mic size={48} className="text-gold" />,
            image: "/images/7.jpg"
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-gold">Services</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We offer professional choir services for various occasions, ensuring a spirit-filled atmosphere.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-gold/20 transition-all duration-300 border border-gray-800 group">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <div className="mb-4 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
