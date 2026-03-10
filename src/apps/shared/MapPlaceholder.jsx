import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Layers } from 'lucide-react'

const MapPlaceholder = ({ title = 'Carte', height = '400px', markers = [] }) => {
    return (
        <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] overflow-hidden">
            <div className="p-5 flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#2B3674] tracking-tight">{title}</h3>
                <div className="flex gap-2">
                    <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors">
                        <Layers className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors">
                        <Navigation className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="relative" style={{ height }}>
                {/* Map background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F0FE] via-[#F4F7FE] to-[#E0E5F2]">
                    {/* Grid lines to simulate map */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A3AED0" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    {/* Sample road lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="30%" x2="90%" y2="70%" stroke="#A3AED0" strokeWidth="3" strokeLinecap="round" />
                        <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    {/* Sample map markers */}
                    {markers.length > 0 ? markers.map((marker, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="absolute flex flex-col items-center"
                            style={{ left: marker.x, top: marker.y }}
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: marker.color || '#4318FF' }}>
                                <MapPin className="w-4 h-4 text-white" />
                            </div>
                            {marker.label && (
                                <span className="mt-1 px-2 py-0.5 bg-white rounded-full text-[11px] font-bold text-[#2B3674] shadow-sm whitespace-nowrap">
                                    {marker.label}
                                </span>
                            )}
                        </motion.div>
                    )) : (
                        <>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="absolute left-[25%] top-[35%]">
                                <div className="w-8 h-8 bg-[#4318FF] rounded-full flex items-center justify-center shadow-lg">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="absolute left-[60%] top-[50%]">
                                <div className="w-8 h-8 bg-[#05CD99] rounded-full flex items-center justify-center shadow-lg">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="absolute left-[45%] top-[25%]">
                                <div className="w-8 h-8 bg-[#EE5D50] rounded-full flex items-center justify-center shadow-lg">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>
                        </>
                    )}
                </div>

                {/* Overlay info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#05CD99] animate-pulse" />
                        <span className="text-[13px] font-bold text-[#2B3674]">Connexion GPS active</span>
                    </div>
                    <span className="text-[12px] font-medium text-[#A3AED0]">{markers.length || 3} points</span>
                </div>
            </div>
        </div>
    )
}

export default MapPlaceholder
