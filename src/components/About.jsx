import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Hexagon, Triangle, Square, Pentagon } from 'lucide-react';
import Background from '../assets/Bg.jpeg'
const About = () => {
    // Array to render placeholder logos based on the "LOGOIPSUM" theme in the screenshot
    const logos = [
        {
            icon: <Hexagon className="w-10 h-10 -mr-2" strokeWidth={1.5} />,
            text: "LOGOIPSUM",
            style: "italic font-black tracking-tighter"
        },
        {
            icon: <Circle className="w-12 h-12" fill="black" />,
            text: "",
            style: "flex justify-center" // It represents the cat/fox logo in the screenshot
        },
        {
            icon: null,
            text: "LOGOIPSUM",
            style: "font-serif text-3xl tracking-widest"
        },
        {
            icon: <Triangle className="w-6 h-6 mr-1" strokeWidth={3} />,
            text: "logoipsum",
            style: "font-mono font-bold text-xl italic text-gray-400"
        },
        {
            icon: <Pentagon className="w-8 h-8 mr-2" strokeWidth={2} />,
            text: "LOGOIPSUM",
            style: "font-sans font-extrabold tracking-tight"
        }
    ];

    return (
        <section
            style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover ', backgroundPosition: 'center' }}
            className="py-24 px-6 md:px-16 lg:px-24 bg-[#f8f7f4] min-h-[85vh] w-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1600px] mx-auto w-full">

                {/* Top Section - Title and Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">

                    {/* Clients Label with Gradient Line */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 shrink-0 mt-2"
                    >
                        <div className="w-14 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 rounded-full"></div>
                        <span className="text-[11px] text-white font-bold tracking-[0.25em] text-black">CLIENTS</span>
                    </motion.div>

                    {/* Bold Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <h2 className="text-white text-[2.5rem] leading-[1.1] md:text-5xl lg:text-[4rem] lg:leading-[1.1] font-medium tracking-[-0.03em] text-[#0a0a0a] max-w-[1200px]">
                            Trusted by brands who value design, clarity, and results — from emerging startups to industry-leading names.
                        </h2>
                    </motion.div>
                </div>

                {/* Bottom Section - Logo Cards Scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 -mx-2 hide-scroll"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
                        .hide-scroll::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-[280px] h-[300px] md:w-[340px] md:h-[360px] shrink-0 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
                        >
                            {/* Render different logo styles based on the array */}
                            {logo.text === "" ? ( // Special case for the icon-only logo
                                <div className="relative">
                                    <div className="w-14 h-10 bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                                        {/* Mocking the cat/fox logo simply */}
                                        <div className="absolute top-0 right-2 w-4 h-4 bg-white rotate-45 transform origin-bottom-left"></div>
                                        <div className="absolute top-1 left-3 w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center text-black">
                                    {logo.icon}
                                    <span className={`text-2xl ${logo.style}`}>{logo.text}</span>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Add a couple more empty feeling cards like in the screenshot edge */}
                    <div className="w-[280px] h-[300px] md:w-[340px] md:h-[360px] shrink-0 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                        <span className="font-serif italic font-bold text-3xl tracking-tight text-black">logo<span className="text-gray-400 font-normal">ipsum</span></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
