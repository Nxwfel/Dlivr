import React from 'react'
import MapPlaceholder from '../shared/MapPlaceholder'
import { motion } from 'framer-motion'
import { MapPin, User, Navigation } from 'lucide-react'

const ClientMapView = () => {
    const markers = [
        { x: '20%', y: '30%', color: '#4318FF', label: 'Épicerie Al Baraka' },
        { x: '45%', y: '45%', color: '#05CD99', label: 'Supermarché Atlas' },
        { x: '65%', y: '35%', color: '#FFCE20', label: 'Café du Centre' },
        { x: '35%', y: '65%', color: '#EE5D50', label: 'Grossiste Maroc' },
        { x: '75%', y: '55%', color: '#7B61FF', label: 'Boulangerie LP' },
    ]

    return (
        <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {[
                    { label: 'Clients sur la Carte', value: markers.length, icon: MapPin, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Zones Couvertes', value: '4', icon: Navigation, color: 'bg-[#E6FFF5] text-[#05CD99]' },
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

            <MapPlaceholder title="Carte des Clients" height="500px" markers={markers} />
        </div>
    )
}

export default ClientMapView
