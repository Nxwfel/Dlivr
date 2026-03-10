import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import WarehouseFullView from '../superviseur-depot/WarehouseFullView'
import NotificationsPage from '../shared/NotificationsPage'
import { motion } from 'framer-motion'
import {
    Inbox, Users, Warehouse, Package, Clock, CheckCircle,
    AlertTriangle, Send, Eye, Bell, Truck
} from 'lucide-react'

const INCOMING_ORDERS = [
    { id: '#CMD-1080', client: 'Épicerie Al Baraka', prevente: 'Mohamed K.', items: 5, total: '2,400 DH', status: 'new', time: 'Il y a 10 min' },
    { id: '#CMD-1081', client: 'Supermarché Atlas', prevente: 'Ahmed B.', items: 12, total: '8,500 DH', status: 'processing', time: 'Il y a 25 min' },
    { id: '#CMD-1082', client: 'Café du Centre', prevente: 'Youssef M.', items: 3, total: '1,200 DH', status: 'new', time: 'Il y a 40 min' },
    { id: '#CMD-1083', client: 'Grossiste Maroc', prevente: 'Hassan B.', items: 20, total: '15,000 DH', status: 'ready', time: 'Il y a 1h' },
    { id: '#CMD-1084', client: 'Boulangerie LP', prevente: 'Omar R.', items: 8, total: '4,800 DH', status: 'processing', time: 'Il y a 1h30' },
]

const STATUS_MAP = {
    'new': { label: 'Nouvelle', color: '#4318FF', bg: '#F4F7FE', icon: Inbox },
    'processing': { label: 'En Traitement', color: '#FFCE20', bg: '#FFF4E5', icon: Clock },
    'ready': { label: 'Prête', color: '#05CD99', bg: '#E6FFF5', icon: CheckCircle },
}

const VENDEURS = [
    { id: 1, name: 'Mohamed K.', zone: 'Casablanca Nord', truck: 'T-001', deliveries: 8, status: 'active' },
    { id: 2, name: 'Ahmed B.', zone: 'Casablanca Sud', truck: 'T-002', deliveries: 5, status: 'active' },
    { id: 3, name: 'Youssef M.', zone: 'Rabat', truck: 'T-003', deliveries: 12, status: 'break' },
    { id: 4, name: 'Hassan B.', zone: 'Salé/Témara', truck: 'T-004', deliveries: 3, status: 'active' },
]

const IncomingOrdersPage = () => (
    <div className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
                { label: 'Nouvelles', value: INCOMING_ORDERS.filter(o => o.status === 'new').length, icon: Inbox, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                { label: 'En Traitement', value: INCOMING_ORDERS.filter(o => o.status === 'processing').length, icon: Clock, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
                { label: 'Prêtes', value: INCOMING_ORDERS.filter(o => o.status === 'ready').length, icon: CheckCircle, color: 'bg-[#E6FFF5] text-[#05CD99]' },
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

        <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
            <h3 className="text-xl font-bold text-[#2B3674] mb-6">Commandes Entrantes</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#E0E5F2]">
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Commande</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Client</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Prévente</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Articles</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Total</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Statut</th>
                            <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {INCOMING_ORDERS.map((order, i) => {
                            const status = STATUS_MAP[order.status]
                            return (
                                <motion.tr key={order.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#4318FF]">{order.id}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{order.client}</td>
                                    <td className="py-4 px-4 text-[14px] text-[#A3AED0] font-medium">{order.prevente}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{order.items}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#05CD99]">{order.total}</td>
                                    <td className="py-4 px-4">
                                        <span className="px-3 py-1 rounded-full text-[12px] font-bold" style={{ backgroundColor: status.bg, color: status.color }}>
                                            {status.label}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors"><Eye className="w-4 h-4" /></button>
                                    </td>
                                </motion.tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

const CoordinationPanel = () => (
    <div className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
                { label: 'Vendeurs Actifs', value: VENDEURS.filter(v => v.status === 'active').length, icon: Users, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                { label: 'Livraisons Totales', value: VENDEURS.reduce((a, v) => a + v.deliveries, 0), icon: Truck, color: 'bg-[#E6FFF5] text-[#05CD99]' },
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

        <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
            <h3 className="text-xl font-bold text-[#2B3674] mb-6">Coordination Vendeurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VENDEURS.map((v, i) => (
                    <motion.div key={v.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        className="p-5 bg-[#F4F7FE] rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${v.name}`} alt={v.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <h4 className="text-[15px] font-bold text-[#2B3674]">{v.name}</h4>
                                    <p className="text-[13px] text-[#A3AED0] font-medium">{v.zone}</p>
                                </div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${v.status === 'active' ? 'bg-[#E6FFF5] text-[#05CD99]' : 'bg-[#FFF4E5] text-[#FFCE20]'}`}>
                                {v.status === 'active' ? 'Actif' : 'Pause'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-[13px]">
                            <span className="text-[#A3AED0] font-medium">Camion: {v.truck}</span>
                            <span className="font-bold text-[#2B3674]">{v.deliveries} livraisons</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
)

const MENU_ITEMS = [
    { id: 'incoming-orders', label: 'Commandes Entrantes', icon: Inbox },
    { id: 'coordination', label: 'Coordination', icon: Users },
    { id: 'warehouse-shipping', label: 'Entrepôt & Expédition', icon: Warehouse },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const ChefCommandeApp = () => {
    const [currentPage, setCurrentPage] = useState('incoming-orders')

    const renderPage = () => {
        switch (currentPage) {
            case 'incoming-orders': return <IncomingOrdersPage />
            case 'coordination': return <CoordinationPanel />
            case 'warehouse-shipping': return <WarehouseFullView />
            case 'notifications': return <NotificationsPage />
            default: return <IncomingOrdersPage />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Chef de Commande"
            appColor="#8B6914"
            userRole="ChefCommande"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default ChefCommandeApp
