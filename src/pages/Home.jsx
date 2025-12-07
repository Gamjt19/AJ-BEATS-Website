import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const text = "AJ BEATS PATHANAPURAM";
    const splitText = text.split("");

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/1.jpg"
                        alt="AJ Beats Performing"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight flex flex-wrap justify-center gap-x-4">
                        {/* AJ BEATS */}
                        <span className="text-gold flex">
                            {splitText.slice(0, 8).map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.1,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>

                        {/* PATHANAPURAM */}
                        <span className="flex">
                            {splitText.slice(8).map((char, index) => (
                                <motion.span
                                    key={index + 8}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.1,
                                        delay: (index + 8) * 0.1,
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                        Music That Inspires Souls. The God's Band.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-gold hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Book Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/services"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8">Welcome to AJ Beats</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        We are a dedicated Christian music band based in Pathanapuram, committed to spreading the message of God through soul-stirring music.
                        Whether it's a wedding, funeral, or convention, our choir brings a divine atmosphere to every occasion.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
