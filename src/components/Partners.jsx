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
        <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] text-white">
            <div className="max-w-[1600px] mx-auto w-full flex flex-col items-center">

                {/* Minimalist Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6 mb-16"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 rounded-full"></div>
                        <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-400">PARTNERS</span>
                        <div className="w-14 h-[2px] bg-gradient-to-l from-orange-400 via-yellow-400 to-blue-500 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Partners List */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap justify-center gap-12 md:gap-20"
                >
                    {partners.map(({ name, Icon }) => (
                        <div
                            key={name}
                            className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors duration-300 cursor-pointer group"
                        >
                            <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                            <span className="font-medium text-2xl tracking-tight">{name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
