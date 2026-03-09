import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
            {/* Background image - solar panels with blue sky */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
                }}
            />
            {/* Dual-tone overlay: emerald fading into navy */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e5e]/90 via-[#0a1e5e]/50 to-transparent" />

            {/* Content anchored towards the bottom */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 pb-24 pt-40">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                    {/* Left — Headline + CTA */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl lg:text-[4.25rem] xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            Power Your Future with
                            <br />
                            Clean Solar Energy
                        </h1>
                        <button className="bg-white text-blue-800 px-9 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 border border-white/80">
                            Our Services
                        </button>
                    </motion.div>

                    {/* Right — Sub-copy */}
                    <motion.div
                        className="max-w-sm lg:pb-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                    >
                        <p className="text-lg text-blue-100/90 leading-relaxed">
                            Smart solar panel solutions designed to reduce your monthly
                            electricity bills while delivering reliable performance and
                            long-term saving.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
