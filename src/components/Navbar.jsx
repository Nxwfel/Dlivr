import React from 'react';
import { Sun, Lightbulb } from 'lucide-react';
import LightPillar from './LightPillar';
import Ballpit from './Ballpit'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="relative w-full">
            <nav className="relative bg-transparent flex items-center justify-between px-8 py-5 max-w-[1600px] mx-auto">
                <div className="flex items-center gap-3 ml-4">
                    <div className='h-[5vh] w-[6vw] bg-black rounded-2xl border-1 border-neutral-400'>
                        <div style={{ width: '100%', height: '100px', position: 'relative' }}>
                            <LightPillar
                                topColor="#5227FF"
                                bottomColor="#FF9FFC"
                                intensity={1}
                                rotationSpeed={2}
                                glowAmount={0.002}
                                pillarWidth={3}
                                pillarHeight={0.4}
                                noiseIntensity={0.5}
                                pillarRotation={25}
                                interactive={false}
                                mixBlendMode="screen"
                                quality="high"
                            />
                        </div>
                    </div>
                    <h1 className='Primary tracking-tight text-black text-2xl'>
                        Dlivr
                    </h1>
                    <p className='text-black font-semibold text-sm uppercase mb-auto flex -ml-[.5vw]'>
                        tm
                    </p>
                </div>
                <div className="hidden md:flex items-center w-fit h-fit px-6 py-2 border-2 border-neutral-500 bg-black rounded-full Primary gap-7">
                    <a href="#" className="text-white hover:text-[#7d2aaa] transition-colors">Home</a>
                    <a href="#" className="text-white hover:text-[#7d2aaa] transition-colors">About</a>
                    <a href="#" className="text-white hover:text-[#7d2aaa] transition-colors">Services</a>
                    <motion.div
                        initial={{ scale: 1, fontSize: '2.3vh' }}
                        whileHover={{ scale: 1.1, fontSize: '1.6vh' }}
                        className='relative h-[6vh] cursor-pointer  w-[7vw] flex items-start justify-center overflow-hidden  rounded-2xl border-1 border-neutral-400'>
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
                                <Ballpit
                                    count={100}
                                    gravity={0.01}
                                    friction={0.9975}
                                    wallBounce={0.95}
                                    followCursor={false}
                                />
                            </div>
                        </div>
                        <motion.p
                            className='absolute Primary mt-1.5 z-30 text-white'>Contact us</motion.p>
                    </motion.div>
                    <button
                        onClick={() => navigate('/login')}
                        className='h-[6vh] w-[7vw] bg-white text-black text-[1.6vh] rounded-2xl border-2 border-transparent hover:bg-neutral-200 transition-colors Primary Primary font-medium'>
                        Log In
                    </button>
                </div>

            </nav >
        </div >
    );
};
export default Navbar;
