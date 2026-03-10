import React from 'react'
import { motion } from 'framer-motion'
import { Package, Truck, Warehouse, AlertTriangle, BarChart3 } from 'lucide-react'

const TRUCKS = [
    { id: 'T-001', driver: 'Mohamed K.', items: 145, capacity: 200, status: 'en-route' },
    { id: 'T-002', driver: 'Ahmed B.', items: 80, capacity: 200, status: 'loading' },
    { id: 'T-003', driver: 'Youssef M.', items: 200, capacity: 200, status: 'full' },
]

const WAREHOUSE_STOCK = [
    { name: 'Coca Cola 1.5L', global: 500, perTruck: { 'T-001': 48, 'T-002': 30, 'T-003': 60 } },
    { name: 'Eau Sidi Ali 1L', global: 800, perTruck: { 'T-001': 40, 'T-002': 20, 'T-003': 50 } },
    { name: 'Jus Valencia 1L', global: 200, perTruck: { 'T-001': 20, 'T-002': 10, 'T-003': 30 } },
    { name: 'Lait Centrale 1L', global: 350, perTruck: { 'T-001': 15, 'T-002': 10, 'T-003': 25 } },
    { name: 'Biscuits Tagger', global: 450, perTruck: { 'T-001': 22, 'T-002': 10, 'T-003': 35 } },
]

const STATUS_MAP = {
    'en-route': { label: 'En Route', color: '#4318FF', bg: '#F4F7FE' },
    'loading': { label: 'Chargement', color: '#FFCE20', bg: '#FFF4E5' },
    'full': { label: 'Complet', color: '#05CD99', bg: '#E6FFF5' },
}

const WarehouseFullView = () => {
    const globalTotal = WAREHOUSE_STOCK.reduce((a, s) => a + s.global, 0)

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Stock Global', value: globalTotal.toLocaleString(), icon: Warehouse, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Camions Actifs', value: TRUCKS.length, icon: Truck, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Produits', value: WAREHOUSE_STOCK.length, icon: Package, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
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

            {/* Trucks */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <h3 className="text-xl font-bold text-[#2B3674] mb-4">Stock par Camion</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {TRUCKS.map((truck, i) => {
                        const pct = Math.round((truck.items / truck.capacity) * 100)
                        const status = STATUS_MAP[truck.status]
                        return (
                            <motion.div key={truck.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="p-4 bg-[#F4F7FE] rounded-xl">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-[#4318FF]" />
                                        <span className="text-[15px] font-bold text-[#2B3674]">{truck.id}</span>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ backgroundColor: status.bg, color: status.color }}>
                                        {status.label}
                                    </span>
                                </div>
                                <p className="text-[13px] text-[#A3AED0] font-medium mb-2">Chauffeur: {truck.driver}</p>
                                <div className="flex justify-between text-[13px] mb-1">
                                    <span className="text-[#A3AED0] font-medium">{truck.items} / {truck.capacity}</span>
                                    <span className="font-bold text-[#2B3674]">{pct}%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#E0E5F2] rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8 }}
                                        className="h-full rounded-full bg-[#4318FF]" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Global Stock Table */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-4">Vue Globale du Stock</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Produit</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Stock Global</th>
                                {TRUCKS.map(t => (
                                    <th key={t.id} className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">{t.id}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {WAREHOUSE_STOCK.map((item, i) => (
                                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{item.name}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#4318FF]">{item.global}</td>
                                    {TRUCKS.map(t => (
                                        <td key={t.id} className="py-4 px-4 text-[14px] font-medium text-[#2B3674]">{item.perTruck[t.id] || 0}</td>
                                    ))}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WarehouseFullView
