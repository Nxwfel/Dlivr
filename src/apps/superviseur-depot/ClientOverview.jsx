import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, DollarSign, TrendingUp, Eye, Search } from 'lucide-react'

const CLIENTS = [
    { id: 1, name: 'Épicerie Al Baraka', location: 'Casablanca, Maarif', totalOrders: 45, revenue: 54000, trend: '+8%' },
    { id: 2, name: 'Supermarché Atlas', location: 'Casablanca, Anfa', totalOrders: 32, revenue: 128000, trend: '+15%' },
    { id: 3, name: 'Café du Centre', location: 'Casablanca, Centre', totalOrders: 18, revenue: 21600, trend: '-3%' },
    { id: 4, name: 'Grossiste Maroc Dist.', location: 'Ain Sebaa', totalOrders: 67, revenue: 335000, trend: '+22%' },
    { id: 5, name: 'Boulangerie La Parisienne', location: 'Rabat, Agdal', totalOrders: 12, revenue: 14400, trend: '+5%' },
]

const ClientOverview = () => {
    const totalRevenue = CLIENTS.reduce((a, c) => a + c.revenue, 0)

    return (
        <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Total Clients', value: CLIENTS.length, icon: User, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Revenu Total', value: `${(totalRevenue / 1000).toFixed(0)}K DH`, icon: DollarSign, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Croissance', value: '+12%', icon: TrendingUp, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
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
                <h3 className="text-xl font-bold text-[#2B3674] mb-6">Vue d'ensemble des Clients</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Client</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Localisation</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Commandes</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Revenu</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Tendance</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CLIENTS.map((client, i) => (
                                <motion.tr key={client.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{client.name}</td>
                                    <td className="py-4 px-4"><div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#A3AED0]" /><span className="text-[14px] text-[#A3AED0] font-medium">{client.location}</span></div></td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{client.totalOrders}</td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#05CD99]">{client.revenue.toLocaleString()} DH</td>
                                    <td className="py-4 px-4">
                                        <span className={`text-sm font-bold ${client.trend.startsWith('+') ? 'text-[#05CD99]' : 'text-[#EE5D50]'}`}>{client.trend}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors"><Eye className="w-4 h-4" /></button>
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

export default ClientOverview
