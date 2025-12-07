import React, { useState } from 'react';
import { Phone, MessageCircle, X, MessageSquarePlus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        { number: '9895849706', label: 'Main Contact' },
        { number: '7012774731', label: 'Alt Contact' }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col gap-3 items-end"
                    >
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center gap-3 bg-black/90 p-3 rounded-xl border border-gray-800 shadow-xl backdrop-blur-sm">
                                <span className="text-white text-sm font-medium mr-2">{contact.number}</span>
                                <a
                                    href={`tel:+91${contact.number}`}
                                    className="bg-secondary hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                                    title={`Call ${contact.number}`}
                                >
                                    <Phone size={20} />
                                </a>
                                <a
                                    href={`https://wa.me/91${contact.number}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                                    title={`WhatsApp ${contact.number}`}
                                >
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-gold text-black hover:scale-110'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquarePlus size={24} />}
            </button>
        </div>
    );
};

export default WhatsAppButton;
