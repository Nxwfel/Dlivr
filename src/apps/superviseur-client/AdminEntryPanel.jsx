import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlus, User, Phone, MapPin, Briefcase, Save, Search, Edit3, Trash2, Plus, X } from 'lucide-react'

const SAMPLE_CLIENTS = [
    { id: 1, name: 'Épicerie Al Baraka', phone: '0661234567', location: 'Casablanca', type: 'Épicerie', status: 'active' },
    { id: 2, name: 'Supermarché Atlas', phone: '0662345678', location: 'Rabat', type: 'Supermarché', status: 'active' },
    { id: 3, name: 'Café du Centre', phone: '0663456789', location: 'Casablanca', type: 'Café', status: 'inactive' },
    { id: 4, name: 'Grossiste Maroc', phone: '0664567890', location: 'Ain Sebaa', type: 'Grossiste', status: 'active' },
]

const AdminEntryPanel = () => {
    const [search, setSearch] = useState('')
    const [showForm, setShowForm] = useState(false)

    const filtered = SAMPLE_CLIENTS.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Total Clients', value: SAMPLE_CLIENTS.length, icon: User, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Actifs', value: SAMPLE_CLIENTS.filter(c => c.status === 'active').length, icon: User, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Inactifs', value: SAMPLE_CLIENTS.filter(c => c.status === 'inactive').length, icon: User, color: 'bg-[#FEECEE] text-[#EE5D50]' },
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

            {/* Add Client Form (toggleable) */}
            {showForm && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-[#2B3674]">Ajouter un Client</h3>
                        <button onClick={() => setShowForm(false)} className="p-2 text-[#A3AED0] hover:text-[#EE5D50] transition-colors"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { placeholder: 'Nom complet', icon: User },
                            { placeholder: 'Téléphone', icon: Phone },
                            { placeholder: 'Localisation', icon: MapPin },
                            { placeholder: "Type d'activité", icon: Briefcase },
                        ].map((field, i) => (
                            <div key={i} className="relative">
                                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input type="text" placeholder={field.placeholder}
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-medium" />
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#4318FF] hover:bg-[#3614D0] text-white rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]">
                        <Save className="w-5 h-5" /> Enregistrer
                    </button>
                </motion.div>
            )}

            {/* Client List */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#2B3674]">Gestion des Clients</h3>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher..."
                                className="pl-9 pr-4 py-2.5 bg-[#F4F7FE] rounded-xl text-sm text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-1 focus:ring-[#4318FF] font-medium" />
                        </div>
                        <button onClick={() => setShowForm(true)}
                            className="flex items-center gap-1 px-4 py-2 bg-[#4318FF] text-white rounded-xl font-bold text-sm hover:bg-[#3614D0] transition-colors">
                            <Plus className="w-4 h-4" /> Ajouter
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Client</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Téléphone</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Localisation</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Type</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Statut</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((client, i) => (
                                <motion.tr key={client.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#F4F7FE]/50 transition-colors">
                                    <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{client.name}</td>
                                    <td className="py-4 px-4 text-[14px] text-[#A3AED0] font-medium">{client.phone}</td>
                                    <td className="py-4 px-4 text-[14px] text-[#A3AED0] font-medium">{client.location}</td>
                                    <td className="py-4 px-4 text-[14px] font-medium text-[#2B3674]">{client.type}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${client.status === 'active' ? 'bg-[#E6FFF5] text-[#05CD99]' : 'bg-[#FEECEE] text-[#EE5D50]'}`}>
                                            {client.status === 'active' ? 'Actif' : 'Inactif'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex gap-2">
                                            <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#4318FF] transition-colors"><Edit3 className="w-4 h-4" /></button>
                                            <button className="p-2 bg-[#F4F7FE] rounded-[10px] text-[#A3AED0] hover:text-[#EE5D50] transition-colors"><Trash2 className="w-4 h-4" /></button>
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

export default AdminEntryPanel
