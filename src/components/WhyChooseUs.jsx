import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import GlassScene from './GlassScene';

const features = [
    {
        icon: <Zap className="w-8 h-8 text-black" strokeWidth={1.5} />,
        title: "Lightning Fast",
        desc: "Optimized delivery networks ensuring your packages arrive precisely when expected, every time.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-black" strokeWidth={1.5} />,
        title: "Secure Handling",
        desc: "End-to-end encryption for digital assets and military-grade protocols for physical deliveries.",
    },
    {
        icon: <Clock className="w-8 h-8 text-black" strokeWidth={1.5} />,
        title: "24/7 Availability",
        desc: "Our support operations never sleep. We are constantly monitoring to ensure perfect performance.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-black" strokeWidth={1.5} />,
        title: "Scale With Us",
        desc: "From single packages to enterprise logistics, our infrastructure grows alongside your business needs.",
    },
];

function FeatureCard({ feature, idx }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity }}
            transition={{ ease: "easeOut" }}
            className="bg-[#f8f7f4] rounded-[2.5rem] p-10 lg:p-12 hover:bg-[#f0efeb] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between min-h-[300px] cursor-default"
        >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
                {feature.icon}
            </div>

            <div>
                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-mono text-sm tracking-tight">{feature.desc}</p>
            </div>
        </motion.div>
    );
}

export default function WhyChooseUs() {
    const containerRef = useRef(null);

    return (
        <section
            ref={containerRef}
            className="bg-white px-6 md:px-16 lg:px-24 py-24 min-h-screen"
        >
            <div className="max-w-[1600px] mx-auto w-full">

                {/* Header matching site-wide style */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 shrink-0 mt-2"
                    >
                        <div className="w-14 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 rounded-full"></div>
                        <span className="text-[11px] text-black font-bold tracking-[0.25em]">WHY US</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <h2 className="text-black text-[2.5rem] leading-[1.1] md:text-5xl lg:text-[4rem] font-medium tracking-[-0.03em] max-w-[1200px]">
                            Engineered for uncompromising performance and absolute reliability.
                        </h2>
                    </motion.div>
                </div>

                {/* Two-column: sticky glass on left, scrolling cards on right */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* LEFT: Sticky 3D Glass Canvas */}
                    <div className="lg:sticky lg:top-32 w-full lg:w-[45%] h-[500px] lg:h-[70vh] rounded-[2.5rem] overflow-hidden bg-[#f8f7f4] flex items-center justify-center shrink-0">
                        <GlassScene />
                    </div>

                    {/* RIGHT: Parallax staggered cards */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">
                        {features.map((feature, idx) => (
                            <FeatureCard key={idx} feature={feature} idx={idx} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
