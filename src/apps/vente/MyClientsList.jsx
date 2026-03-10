import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Phone, Search, Filter, Eye, Package } from 'lucide-react'

const SAMPLE_CLIENTS = [
    { id: 1, name: 'Épicerie Al Baraka', phone: '0661234567', location: 'Casablanca, Maarif', source: 'Prévente', orders: 12 },
    { id: 2, name: 'Supermarché Atlas', phone: '0662345678', location: 'Casablanca, Anfa', source: 'Entrepôt', orders: 8 },
    { id: 3, name: 'Café du Centre', phone: '0663456789', location: 'Casablanca, Centre', source: 'Prévente', orders: 5 },
    { id: 4, name: 'Grossiste Maroc Dist.', phone: '0664567890', location: 'Ain Sebaa', source: 'Entrepôt', orders: 22 },
    { id: 5, name: 'Boulangerie La Parisienne', phone: '0665678901', location: 'Rabat, Agdal', source: 'Prévente', orders: 3 },
    { id: 6, name: 'Pharmacie Santé Plus', phone: '0666789012', location: 'Rabat, Hassan', source: 'Entrepôt', orders: 7 },
]

const MyClientsList = () => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')

    const filtered = SAMPLE_CLIENTS.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase())
        const matchesFilter = filter === 'all' || c.source.toLowerCase() === filter
        return matchesSearch && matchesFilter
    })

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Total Clients', value: SAMPLE_CLIENTS.length, icon: User, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Via Prévente', value: SAMPLE_CLIENTS.filter(c => c.source === 'Prévente').length, icon: User, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Via Entrepôt', value: SAMPLE_CLIENTS.filter(c => c.source === 'Entrepôt').length, icon: Package, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
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
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                    <h3 className="text-xl font-bold text-[#2B3674]">Mes Clients</h3>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher..."
                                className="pl-9 pr-4 py-2.5 bg-[#F4F7FE] rounded-xl text-sm text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-1 focus:ring-[#4318FF] font-medium" />
                        </div>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}
                            className="px-4 py-2.5 bg-[#F4F7FE] rounded-xl text-sm text-[#2B3674] focus:outline-none focus:ring-1 focus:ring-[#4318FF] font-medium appearance-none cursor-pointer">
                            <option value="all">Tous</option>
                            <option value="prévente">Prévente</option>
                            <option value="entrepôt">Entrepôt</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Client</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Téléphone</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Localisation</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Source</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Commandes</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((client, i) => (
                                <motion.tr key={client.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{client.name}</td>
                                    <td className="py-4 px-4"><div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#A3AED0]" /><span className="text-[14px] text-[#2B3674] font-medium">{client.phone}</span></div></td>
                                    <td className="py-4 px-4"><div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#A3AED0]" /><span className="text-[14px] text-[#A3AED0] font-medium">{client.location}</span></div></td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${client.source === 'Prévente' ? 'bg-[#F4F7FE] text-[#4318FF]' : 'bg-[#FFF4E5] text-[#FFCE20]'}`}>{client.source}</span>
                                    </td>
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{client.orders}</td>
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

export default MyClientsList
