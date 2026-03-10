import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 bg-white min-h-[85vh] flex flex-col justify-center border-t border-gray-200/60">
            <div className="max-w-[1600px] mx-auto w-full">

                {/* Header section matching About.jsx style */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 shrink-0 mt-2"
                    >
                        <div className="w-14 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 rounded-full"></div>
                        <span className="text-[11px] text-black font-bold tracking-[0.25em]">CONNECT</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <h2 className="text-black text-[2.5rem] leading-[1.1] md:text-5xl lg:text-[4rem] font-medium tracking-[-0.03em] max-w-[1200px]">
                            Ready to transform your delivery operations? Let's talk about precision.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <a href="mailto:hello@dlivr.com" className="bg-white rounded-[2.5rem] p-8 md:p-12 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer group flex items-start gap-6 border border-gray-100">
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-black" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-2">Email Us</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl md:text-3xl font-medium text-black">hello@dlivr.com</p>
                                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" strokeWidth={2} />
                                </div>
                            </div>
                        </a>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="bg-white rounded-[2rem] p-8 flex-1 border border-gray-100">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 mb-6">
                                    <Phone className="w-5 h-5 text-black" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">Call Us</h3>
                                <p className="text-xl font-medium text-black">+1 (800) 555-0199</p>
                            </div>

                            <div className="bg-white rounded-[2rem] p-8 flex-1 border border-gray-100">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 mb-6">
                                    <MapPin className="w-5 h-5 text-black" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">Visit Us</h3>
                                <p className="text-xl font-medium text-black">100 Precision Way<br />New York, NY</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Minimalist Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-black text-white rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-14"
                    >
                        <h3 className="text-3xl font-medium mb-10 tracking-tight">Send a message</h3>

                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold tracking-widest uppercase text-neutral-400">Your Name</label>
                                <input type="text" placeholder="John Doe" className="bg-transparent border-b border-neutral-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold tracking-widest uppercase text-neutral-400">Email Address</label>
                                <input type="email" placeholder="john@company.com" className="bg-transparent border-b border-neutral-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold tracking-widest uppercase text-neutral-400">Message</label>
                                <textarea rows="3" placeholder="Tell us about your needs..." className="bg-transparent border-b border-neutral-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 resize-none"></textarea>
                            </div>

                            <button type="button" className="mt-6 bg-white text-black py-4 px-8 rounded-full font-medium hover:bg-neutral-200 transition-colors w-fit flex items-center gap-3 group">
                                Submit Form
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
