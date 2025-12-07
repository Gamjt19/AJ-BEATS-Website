import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-gold font-bold text-lg">AJ BEATS PATHANAPURAM</span>
                        <p className="text-gray-400 text-sm mt-1">The God's Band</p>
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
                        <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link>
                    </div>

                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} AJ Beats. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
