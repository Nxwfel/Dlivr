import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import NotificationsPage from '../shared/NotificationsPage'
import { motion } from 'framer-motion'
import {
    LayoutDashboard, Warehouse, Users, CreditCard, DollarSign, TrendingUp,
    Package, Truck, Banknote, ArrowUpRight, ArrowDownRight, Bell, BarChart3
} from 'lucide-react'

const ComptableDashboard = () => {
    const stats = [
        { label: 'Entrepôts', value: '4', icon: Warehouse, color: 'bg-[#F4F7FE] text-[#4318FF]', change: 0 },
        { label: 'Clients Actifs', value: '248', icon: Users, color: 'bg-[#E6FFF5] text-[#05CD99]', change: 12 },
        { label: 'Crédits en Cours', value: '156K DH', icon: CreditCard, color: 'bg-[#FEECEE] text-[#EE5D50]', change: -5 },
        { label: 'Fournisseurs', value: '32', icon: Package, color: 'bg-[#FFF4E5] text-[#FFCE20]', change: 3 },
    ]

    const financials = [
        { label: 'Revenu Total', value: '2,450,000 DH', trend: '+18%', positive: true },
        { label: 'Dépenses', value: '1,200,000 DH', trend: '+5%', positive: false },
        { label: 'Bénéfice Net', value: '1,250,000 DH', trend: '+24%', positive: true },
        { label: 'Solde Caisse', value: '485,000 DH', trend: '+8%', positive: true },
    ]

    const warehouses = [
        { name: 'Dépôt Casablanca', stock: 1200, revenue: '850K', trucks: 3 },
        { name: 'Dépôt Rabat', stock: 800, revenue: '620K', trucks: 2 },
        { name: 'Dépôt Marrakech', stock: 650, revenue: '480K', trucks: 2 },
        { name: 'Dépôt Fès', stock: 400, revenue: '320K', trucks: 1 },
    ]

    return (
        <div className="pb-12">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
                {stats.map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                        <div className="flex items-center gap-4">
                            <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#A3AED0]">{stat.label}</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold text-[#2B3674]">{stat.value}</h3>
                                    {stat.change !== 0 && (
                                        <span className={`text-sm font-bold flex items-center ${stat.change > 0 ? 'text-[#05CD99]' : 'text-[#EE5D50]'}`}>
                                            {stat.change > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                            {stat.change > 0 ? '+' : ''}{stat.change}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {financials.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                        <p className="text-sm font-medium text-[#A3AED0] mb-1">{item.label}</p>
                        <h3 className="text-xl font-bold text-[#2B3674] mb-2">{item.value}</h3>
                        <span className={`text-sm font-bold flex items-center ${item.positive ? 'text-[#05CD99]' : 'text-[#EE5D50]'}`}>
                            {item.positive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                            {item.trend}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Warehouse Breakdown */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-6">Vue par Entrepôt</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Entrepôt</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Stock</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Revenu</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Camions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {warehouses.map((wh, i) => (
                                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{wh.name}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#4318FF]">{wh.stock}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#05CD99]">{wh.revenue} DH</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <Truck className="w-4 h-4 text-[#A3AED0]" />
                                            <span className="text-[15px] font-bold text-[#2B3674]">{wh.trucks}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const MENU_ITEMS = [
    { id: 'comptable-dashboard', label: 'Tableau de Bord', icon: LayoutDashboard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const ComptableApp = () => {
    const [currentPage, setCurrentPage] = useState('comptable-dashboard')

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Comptable"
            appColor="#7B61FF"
            userRole="Comptable"
        >
            {currentPage === 'comptable-dashboard' ? <ComptableDashboard /> : <NotificationsPage />}
        </DashboardLayout>
    )
}

export default ComptableApp
