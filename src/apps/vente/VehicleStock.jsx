import React from 'react'
import { motion } from 'framer-motion'
import { Package, AlertTriangle, CheckCircle, BarChart3, Search } from 'lucide-react'

const STOCK = [
    { id: 1, name: 'Coca Cola 1.5L', quantity: 48, max: 100, unit: 'packs' },
    { id: 2, name: 'Eau Sidi Ali 1L', quantity: 120, max: 150, unit: 'packs' },
    { id: 3, name: 'Jus Valencia 1L', quantity: 12, max: 80, unit: 'cartons' },
    { id: 4, name: 'Biscuits Tagger', quantity: 35, max: 60, unit: 'cartons' },
    { id: 5, name: 'Lait Centrale 1L', quantity: 5, max: 50, unit: 'cartons' },
    { id: 6, name: 'Huile Lesieur 1L', quantity: 60, max: 80, unit: 'bouteilles' },
    { id: 7, name: 'Sucre Cosumar 1kg', quantity: 90, max: 100, unit: 'sacs' },
    { id: 8, name: 'Farine Tria 1kg', quantity: 25, max: 40, unit: 'sacs' },
]

const getStockStatus = (qty, max) => {
    const pct = (qty / max) * 100
    if (pct <= 15) return { label: 'Critique', color: '#EE5D50', bg: '#FEECEE' }
    if (pct <= 40) return { label: 'Faible', color: '#FFCE20', bg: '#FFF4E5' }
    return { label: 'OK', color: '#05CD99', bg: '#E6FFF5' }
}

const VehicleStock = () => {
    const totalItems = STOCK.reduce((acc, s) => acc + s.quantity, 0)
    const lowItems = STOCK.filter(s => (s.quantity / s.max) * 100 <= 40).length

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Articles en Stock', value: totalItems, icon: Package, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Produits', value: STOCK.length, icon: BarChart3, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Stock Faible', value: lowItems, icon: AlertTriangle, color: 'bg-[#FEECEE] text-[#EE5D50]' },
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

            {/* Stock Grid */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-6">Stock du Véhicule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {STOCK.map((item, i) => {
                        const pct = Math.round((item.quantity / item.max) * 100)
                        const status = getStockStatus(item.quantity, item.max)
                        return (
                            <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                                className="p-4 bg-[#F4F7FE] rounded-xl">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#2B3674]">{item.name}</h4>
                                        <p className="text-[13px] text-[#A3AED0] font-medium">{item.quantity} / {item.max} {item.unit}</p>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ backgroundColor: status.bg, color: status.color }}>
                                        {status.label}
                                    </span>
                                </div>
                                <div className="w-full h-2.5 bg-[#E0E5F2] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pct}%` }}
                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: status.color }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default VehicleStock
