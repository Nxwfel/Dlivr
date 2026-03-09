import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: 'Smarter Energy',
        Icon: Zap,
        desc: 'Lower your utility bills and dramatically increase home efficiency with clean power.',
    },
    {
        title: 'Eco Power',
        Icon: Leaf,
        desc: 'Lower your utility bills and dramatically increase home efficiency with clean power.',
    },
    {
        title: 'Energy Independence',
        Icon: ShieldCheck,
        desc: 'Lower your utility bills and dramatically increase home efficiency with clean power.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

const Features = () => {
    return (
        <section className="relative">
            {/* Full-width background image of workers with solar panels */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop')",
                }}
            />
            <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />

            {/* Cards overlay */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-10 py-28">
                {/* Optional "Learn More" pill */}
                <div className="flex justify-center mb-14">
                    <span className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                        Learn More
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center mb-6">
                                <f.Icon className="w-7 h-7 text-blue-600" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-[15px]">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
