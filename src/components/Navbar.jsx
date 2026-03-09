import React from 'react';
import { Sun, Lightbulb } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="relative w-full bg-white">
            {/* Vertical green strip - decorative accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 z-10" />
            <nav className="relative flex items-center justify-between px-8 py-5 max-w-[1600px] mx-auto">
                <div className="flex items-center gap-3 ml-4">
                    <div className='h-[5vh] w-[7vw] bg-black rounded-2xl border-1 border-neutral-400'>

                    </div>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a href="#" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Projects</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</a>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
                    Contact
                </button>
            </nav>
        </div>
    );
};
export default Navbar;
