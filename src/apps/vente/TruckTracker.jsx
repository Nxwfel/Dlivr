import React from 'react'
import MapPlaceholder from '../shared/MapPlaceholder'
import { motion } from 'framer-motion'
import { Truck, Clock, MapPin, Navigation } from 'lucide-react'

const TruckTracker = () => {
    const markers = [
        { x: '30%', y: '40%', color: '#4318FF', label: 'Camion A' },
        { x: '55%', y: '25%', color: '#05CD99', label: 'Camion B' },
        { x: '70%', y: '60%', color: '#FFCE20', label: 'Camion C' },
    ]

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'En Route', value: '3', icon: Truck, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Livraisons Restantes', value: '12', icon: MapPin, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
                    { label: 'Temps Estimé', value: '2h30', icon: Clock, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                ].map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                        <div className="flex items-center gap-4">
                            <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#A3AED0]">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-[#2B3674]">{stat.value}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <MapPlaceholder title="Suivi Camion en Direct" height="500px" markers={markers} />
        </div>
    )
}

export default TruckTracker
