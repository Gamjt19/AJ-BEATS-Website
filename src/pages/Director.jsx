import React from 'react';
import { motion } from 'framer-motion';

const Director = () => {
    return (
        <div className="pt-24 pb-20 bg-black min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet the <span className="text-gold">Director</span></h1>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 max-w-sm"
                    >
                        <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <img
                                src="/images/director.jpg"
                                alt="Asher Daniel James"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <h2 className="text-3xl font-bold text-white mb-2">Asher Daniel James</h2>
                        <p className="text-xl text-gold font-medium mb-6">(Keyboardist)</p>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                As the visionary director of AJ Beats, Asher leads with passion and musical excellence.
                                His dedication to worship and artistry sets the foundation for our ministry.
                            </p>
                            <p>
                                With his mastery of the keys and heart for God, he inspires both the team and
                                the congregation to deeper levels of praise.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Director;
