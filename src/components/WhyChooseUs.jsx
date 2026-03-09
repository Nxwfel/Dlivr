import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    return (
        <section className="py-24 px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header row */}
                <motion.div
                    className="mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-5 py-2 bg-gray-100 rounded-full text-gray-500 text-sm font-medium mb-6">
                        Why Choose Us
                    </span>
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-gray-900 leading-tight tracking-tight">
                            Solar Solutions
                            <br />
                            Designed for You
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                            Smart solar panel solutions designed to reduce your monthly
                            electricity bills while delivering reliable performance and
                            long-term saving.
                        </p>
                    </div>
                </motion.div>

                {/* Full-width house image */}
                <motion.div
                    className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/40"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
                        alt="Modern house with solar panels"
                        className="w-full h-[520px] object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
