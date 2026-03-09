import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Waves, Utensils, Leaf } from 'lucide-react';

const partners = [
    { name: 'Layers', Icon: Layers },
    { name: 'Sisyphus', Icon: Zap },
    { name: 'Luminous', Icon: Waves },
    { name: 'Epicurious', Icon: Utensils },
    { name: 'Biosynthesis', Icon: Leaf },
];

const Partners = () => {
    return (
        <section className="py-14 px-10 bg-white border-t border-gray-100">
            <motion.div
                className="max-w-[1400px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-10">
                    {partners.map(({ name, Icon }) => (
                        <div
                            key={name}
                            className="flex items-center gap-2.5 text-gray-700 hover:text-gray-900 transition-colors cursor-default"
                        >
                            <Icon className="w-6 h-6 text-gray-800" strokeWidth={1.6} />
                            <span className="font-semibold text-lg">{name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Partners;
