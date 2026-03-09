import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-24 px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left — Image with testimonial overlay */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-300/40">
                            <img
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
                                alt="Solar panels on rooftop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Testimonial card */}
                        <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-xs bg-white rounded-xl border border-blue-100 p-4 shadow-xl flex items-center gap-4">
                            <div className="flex -space-x-2.5 shrink-0">
                                {[11, 12, 13].map((id) => (
                                    <div
                                        key={id}
                                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                                    >
                                        <img
                                            src={`https://i.pravatar.cc/80?img=${id}`}
                                            alt="avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm leading-snug">
                                with Sunpower we matched our consulting impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Copy */}
                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                    >
                        <span className="inline-block px-5 py-2 bg-gray-100 rounded-full text-gray-500 text-sm font-medium">
                            Powering bright future with solar
                        </span>
                        <h2 className="text-3xl lg:text-[2.6rem] xl:text-5xl leading-snug font-bold text-gray-900">
                            We focus on creating meaningful impact by combining thoughtful
                            design, smart strategy, and innovation.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            Our mission is to help people and brands grow with purpose through
                            creative ideas that deliver real, measurable results.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
