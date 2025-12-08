import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="pt-24 pb-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-gold">Gallery</span></h1>
                    <p className="text-gray-400">Moments of worship and celebration.</p>
                </div>

                {/* Photos Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-gold pl-4">Photos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 23].map((item) => (
                            <div
                                key={item}
                                className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer"
                                onClick={() => setSelectedItem({ type: 'image', src: `/images/${item}.jpg` })}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:text-gold transition-colors z-0">
                                    {/* Fallback/Loading text if image fails or loads slowly */}
                                    <span className="text-lg">{item}</span>
                                </div>
                                <img
                                    src={`/images/${item}.jpg`}
                                    alt={`Photo ${item}`}
                                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Videos Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-gold pl-4">Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            'WhatsApp Video 2025-12-08 at 10.01.04_747c0c87.mp4',
                            'WhatsApp Video 2025-12-08 at 10.01.17_39882692.mp4',
                            'WhatsApp Video 2025-12-08 at 10.01.18_93c9cee9.mp4',
                            'WhatsApp Video 2025-12-08 at 10.01.18_f13015c0.mp4',
                            'con_video.mp4'
                        ].map((video, index) => (
                            <div
                                key={index}
                                className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative flex items-center justify-center cursor-pointer group hover:border hover:border-gold/50 transition-all"
                                onClick={() => setSelectedItem({ type: 'video', src: `/videos/${video}` })}
                            >
                                <video
                                    src={`/videos/${video}`}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                    muted
                                    preload="metadata"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Watch</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={40} />
                        </button>

                        <div
                            className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            {selectedItem.type === 'image' ? (
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    src={selectedItem.src}
                                    alt="Full screen view"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
                                />
                            ) : (
                                <div className="w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 overflow-hidden">
                                    <video
                                        src={selectedItem.src}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
