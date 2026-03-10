import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RotatingText from './RotatingText'

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100vh] w-screen overflow-hidden relative flex flex-col items-center justify-center p-4">

            {/* Orbital Floating Cards */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative w-[180vw] h-[180vw] md:w-[120vw] md:h-[120vw]"
                >
                    {/* Top Left - Colorful */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[18%] left-[10%] w-32 h-40 md:w-48 md:h-64 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" alt="Colorful" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Top Center - Running */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute z-40 top-[5%] left-[50%] -translate-x-1/2 w-28 h-36 md:w-44 md:h-56 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=400&auto=format&fit=crop" alt="Running" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Top Right - Watch */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[18%] right-[10%] w-32 h-40 md:w-48 md:h-60 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" alt="Watch" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Bottom Right - Bag */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[20%] right-[15%] w-36 h-40 md:w-52 md:h-64 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=400&auto=format&fit=crop" alt="Bag" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Bottom Left - Faces */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[20%] left-[15%] w-36 h-44 md:w-52 md:h-[18rem] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-200"
                    >
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" alt="Faces" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>
            </div>

            <div className=" -mt-[15vh] z-20 flex flex-col justify-center text-center items-center w-full relative z-10">
                {/* Text Auto Scroll */}
                <div className="w-[20vw] overflow-hidden whitespace-nowrap mb-8 flex items-center">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-30%"] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex whitespace-nowrap">
                                {[...Array(8)].map((_, j) => (
                                    <span key={j} className="text-[.5vh] Primary sm:text-base text-neutral-400 tracking-[0.3em] mx-6">
                                        Fast Delivery • Premium Service • Absolute Precision
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <h1 className="text-4xl Primary ">With us</h1>
                <RotatingText
                    texts={['Delivery arrives', 'Order precise', 'Productivity increased', 'Join us!']}
                    mainClassName="px-2 sm:px-2 md:px-3 Primary text-8xl text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.015}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={5000}
                />
            </div>
            <div className="flex flex-col items-center mt-12 mb-4">
                <p className="text-neutral-400 Primary text-lg mb-6 max-w-lg text-center">
                    Discover why thousands of businesses trust us for their most critical operations. Fast, reliable, and perfectly precise.
                </p>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-black border border-neutral-700 hover:bg-neutral-900 text-white px-8 py-3 rounded-full Primary tracking-wide transition-all hover:scale-105 active:scale-95">
                    Start Your Journey
                </button>
            </div>
        </div>
    );
};

export default Hero;