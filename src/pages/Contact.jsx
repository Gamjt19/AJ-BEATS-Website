import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book <span className="text-gold">Now</span></h1>
                    <p className="text-gray-400">Get in touch with us for your next event.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-gold/10 p-3 rounded-full text-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Phone / WhatsApp</h3>
                                    <p className="text-gray-400 mb-2">For bookings and inquiries:</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+919895849706" className="text-white hover:text-gold transition-colors font-mono text-lg">
                                            +91 98958 49706
                                        </a>
                                        <a href="tel:+917012774731" className="text-white hover:text-gold transition-colors font-mono text-lg">
                                            +91 70127 74731
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gold/10 p-3 rounded-full text-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <a href="mailto:asherdanieljames@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                                        asherdanieljames@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/919895849706"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2"
                                >
                                    <MessageSquare size={20} /> WhatsApp Chat
                                </a>
                                <a
                                    href="tel:+919895849706"
                                    className="flex-1 bg-gold hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
