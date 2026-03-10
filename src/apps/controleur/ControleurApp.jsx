import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import MapPlaceholder from '../shared/MapPlaceholder'
import NotificationsPage from '../shared/NotificationsPage'
import { motion } from 'framer-motion'
import { Map, Truck, MapPin, Clock, Eye, Bell } from 'lucide-react'

const TRUCKS_LIVE = [
    { x: '20%', y: '30%', color: '#4318FF', label: 'T-001 Mohamed' },
    { x: '50%', y: '50%', color: '#05CD99', label: 'T-002 Ahmed' },
    { x: '70%', y: '25%', color: '#FFCE20', label: 'T-003 Youssef' },
    { x: '35%', y: '65%', color: '#EE5D50', label: 'T-004 Hassan' },
    { x: '80%', y: '70%', color: '#7B61FF', label: 'T-005 Omar' },
]

const LiveMapPage = () => (
    <div className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            {[
                { label: 'Camions en Route', value: '5', icon: Truck, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                { label: 'Livraisons Complètes', value: '18', icon: MapPin, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                { label: 'En Attente', value: '7', icon: Clock, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
                { label: 'Zones Couvertes', value: '4', icon: Map, color: 'bg-[#FEECEE] text-[#EE5D50]' },
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
        <MapPlaceholder title="Suivi en Direct — Tous les Camions" height="500px" markers={TRUCKS_LIVE} />
    </div>
)

const MENU_ITEMS = [
    { id: 'live-map', label: 'Carte en Direct', icon: Map },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const ControleurApp = () => {
    const [currentPage, setCurrentPage] = useState('live-map')

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Contrôleur"
            appColor="#2B3674"
            userRole="Controleur"
        >
            {currentPage === 'live-map' ? <LiveMapPage /> : <NotificationsPage />}
        </DashboardLayout>
    )
}

export default ControleurApp
