import React from 'react'
import { motion } from 'framer-motion'
import {
    LayoutDashboard, Warehouse, Users, CreditCard, DollarSign, TrendingUp,
    Package, Truck, Banknote, ArrowUpRight, ArrowDownRight, BarChart3,
    MapPin, Clock, ShoppingCart
} from 'lucide-react'

const GlobalDashboard = () => {
    return (
        <div className="pb-12">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {[
                    { label: 'Revenu Total', value: '2.4M DH', icon: DollarSign, color: 'bg-[#F4F7FE] text-[#4318FF]', change: '+18%' },
                    { label: 'Commandes', value: '1,842', icon: ShoppingCart, color: 'bg-[#E6FFF5] text-[#05CD99]', change: '+12%' },
                    { label: 'Clients Actifs', value: '248', icon: Users, color: 'bg-[#FFF4E5] text-[#FFCE20]', change: '+8%' },
                    { label: 'Camions Actifs', value: '8', icon: Truck, color: 'bg-[#FEECEE] text-[#EE5D50]', change: '0%' },
                ].map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                        <div className="flex items-center gap-4">
                            <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#A3AED0]">{stat.label}</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold text-[#2B3674]">{stat.value}</h3>
                                    <span className={`text-sm font-bold flex items-center ${stat.change.startsWith('+') ? 'text-[#05CD99]' : stat.change === '0%' ? 'text-[#A3AED0]' : 'text-[#EE5D50]'}`}>
                                        {stat.change.startsWith('+') && <ArrowUpRight className="w-3 h-3" />}{stat.change}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
                {/* Warehouses */}
                <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                    <h3 className="text-xl font-bold text-[#2B3674] mb-4">Entrepôts</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Dépôt Casablanca', stock: 1200, trucks: 3, color: '#4318FF' },
                            { name: 'Dépôt Rabat', stock: 800, trucks: 2, color: '#05CD99' },
                            { name: 'Dépôt Marrakech', stock: 650, trucks: 2, color: '#FFCE20' },
                            { name: 'Dépôt Fès', stock: 400, trucks: 1, color: '#EE5D50' },
                        ].map((wh, i) => (
                            <div key={i} className="p-4 bg-[#F4F7FE] rounded-xl flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: wh.color + '18', color: wh.color }}>
                                    <Warehouse className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-bold text-[#2B3674]">{wh.name}</h4>
                                    <p className="text-[13px] text-[#A3AED0] font-medium">{wh.stock} articles • {wh.trucks} camions</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personnel */}
                <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                    <h3 className="text-xl font-bold text-[#2B3674] mb-4">Personnel</h3>
                    <div className="space-y-3">
                        {[
                            { role: 'Superviseurs', count: 4, color: '#EE5D50' },
                            { role: 'Vendeurs', count: 12, color: '#05CD99' },
                            { role: 'Comptables', count: 2, color: '#7B61FF' },
                            { role: 'Chefs de Commande', count: 3, color: '#8B6914' },
                            { role: 'Contrôleurs', count: 2, color: '#2B3674' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-[#F4F7FE] rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[15px] font-bold text-[#2B3674]">{item.role}</span>
                                </div>
                                <span className="text-lg font-bold text-[#2B3674]">{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-4">Activité Récente</h3>
                <div className="space-y-3">
                    {[
                        { action: 'Nouvelle commande reçue', detail: '#CMD-1085 — Supermarché Atlas', time: 'Il y a 5 min', color: '#4318FF' },
                        { action: 'Livraison complète', detail: 'T-001 — 8 clients livrés', time: 'Il y a 15 min', color: '#05CD99' },
                        { action: 'Stock faible détecté', detail: 'Lait Centrale — Dépôt Casablanca', time: 'Il y a 30 min', color: '#FFCE20' },
                        { action: 'Nouveau vendeur ajouté', detail: 'Hassan B. — Zone Rabat', time: 'Il y a 1h', color: '#7B61FF' },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                            className="p-4 bg-[#F4F7FE] rounded-xl flex items-center gap-4">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-bold text-[#2B3674]">{item.action}</h4>
                                <p className="text-[13px] text-[#A3AED0] font-medium truncate">{item.detail}</p>
                            </div>
                            <span className="text-[12px] text-[#A3AED0] font-medium whitespace-nowrap">{item.time}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GlobalDashboard
