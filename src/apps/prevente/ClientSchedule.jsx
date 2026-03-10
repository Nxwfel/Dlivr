import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, User, Search, Filter, Eye } from 'lucide-react'

const SAMPLE_CLIENTS = [
    { id: 1, name: 'Épicerie Al Baraka', arrival: '08:30', location: 'Casablanca, Maarif', status: 'confirmed', type: 'Épicerie' },
    { id: 2, name: 'Supermarché Atlas', arrival: '09:15', location: 'Casablanca, Anfa', status: 'pending', type: 'Supermarché' },
    { id: 3, name: 'Café du Centre', arrival: '10:00', location: 'Casablanca, Centre', status: 'confirmed', type: 'Café' },
    { id: 4, name: 'Grossiste Maroc Distribution', arrival: '10:45', location: 'Casablanca, Ain Sebaa', status: 'confirmed', type: 'Grossiste' },
    { id: 5, name: 'Boulangerie La Parisienne', arrival: '11:30', location: 'Rabat, Agdal', status: 'pending', type: 'Boulangerie' },
    { id: 6, name: 'Pharmacie Santé Plus', arrival: '12:00', location: 'Rabat, Hassan', status: 'cancelled', type: 'Pharmacie' },
    { id: 7, name: 'Épicerie Nour', arrival: '14:00', location: 'Salé, Tabriquet', status: 'confirmed', type: 'Épicerie' },
    { id: 8, name: 'Mini Market Express', arrival: '14:45', location: 'Témara', status: 'pending', type: 'Supermarché' },
]

const STATUS_COLORS = {
    confirmed: { bg: '#E6FFF5', text: '#05CD99', label: 'Confirmé' },
    pending: { bg: '#FFF4E5', text: '#FFCE20', label: 'En attente' },
    cancelled: { bg: '#FEECEE', text: '#EE5D50', label: 'Annulé' },
}

const ClientSchedule = () => {
    const [search, setSearch] = useState('')

    const filtered = SAMPLE_CLIENTS.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="pb-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Total Visites', value: SAMPLE_CLIENTS.length, icon: User, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Confirmés', value: SAMPLE_CLIENTS.filter(c => c.status === 'confirmed').length, icon: Clock, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'En attente', value: SAMPLE_CLIENTS.filter(c => c.status === 'pending').length, icon: Clock, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
                ].map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                        <div className="flex items-center gap-4">
                            <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#A3AED0]">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-[#2B3674] tracking-tight">{stat.value}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#2B3674] tracking-tight">Planning des Clients</h3>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Rechercher..."
                                className="pl-9 pr-4 py-2.5 bg-[#F4F7FE] rounded-xl text-sm text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-1 focus:ring-[#4318FF] transition-all font-medium"
                            />
                        </div>
                        <button className="p-2.5 bg-[#F4F7FE] rounded-xl text-[#A3AED0] hover:text-[#4318FF] transition-colors">
                            <Filter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Client</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Heure</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Localisation</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Type</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Statut</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((client, index) => {
                                const statusColors = STATUS_COLORS[client.status]
                                return (
                                    <motion.tr
                                        key={client.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-transparent hover:bg-[#F4F7FE]/50 transition-colors"
                                    >
                                        <td className="py-4 px-4">
                                            <span className="text-[15px] font-bold text-[#2B3674]">{client.name}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[#A3AED0]" />
                                                <span className="text-[15px] font-bold text-[#2B3674]">{client.arrival}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-[#A3AED0]" />
                                                <span className="text-[14px] text-[#A3AED0] font-medium">{client.location}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-[14px] font-medium text-[#2B3674]">{client.type}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span
                                                className="px-3 py-1 rounded-full text-[12px] font-bold"
                                                style={{ backgroundColor: statusColors.bg, color: statusColors.text }}
                                            >
                                                {statusColors.label}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
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
}

export default ClientSchedule
