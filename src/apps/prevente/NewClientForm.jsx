import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, MapPin, QrCode, Briefcase, BarChart3, Save, Plus, X } from 'lucide-react'

const ACTIVITY_TYPES = ['Épicerie', 'Supermarché', 'Café/Restaurant', 'Grossiste', 'Boulangerie', 'Pharmacie', 'Autre']

const NewClientForm = () => {
    const [form, setForm] = useState({
        name: '', phone: '', location: '', qrCode: '', activityType: '', volume: ''
    })

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Client enregistré avec succès!')
        setForm({ name: '', phone: '', location: '', qrCode: '', activityType: '', volume: '' })
    }

    return (
        <div className="pb-12">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                    { label: 'Total Clients', value: '248', icon: User, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Ajoutés ce mois', value: '32', icon: Plus, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Volume moyen', value: '1,200 DH', icon: BarChart3, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
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

            {/* Form */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-8">
                <h3 className="text-xl font-bold text-[#2B3674] tracking-tight mb-6">Enregistrer un Nouveau Client</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="relative">
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Nom complet</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Nom du client"
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Téléphone</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    placeholder="06 XX XX XX XX"
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Maps Location */}
                        <div>
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Localisation Maps</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="text"
                                    value={form.location}
                                    onChange={(e) => handleChange('location', e.target.value)}
                                    placeholder="Entrez l'adresse ou coordonnées"
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* QR Code */}
                        <div>
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Code QR</label>
                            <div className="relative">
                                <QrCode className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="text"
                                    value={form.qrCode}
                                    onChange={(e) => handleChange('qrCode', e.target.value)}
                                    placeholder="Scanner ou entrer le code"
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Activity Type */}
                        <div>
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Type d'activité</label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <select
                                    value={form.activityType}
                                    onChange={(e) => handleChange('activityType', e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium appearance-none cursor-pointer"
                                >
                                    <option value="">Sélectionner</option>
                                    {ACTIVITY_TYPES.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Volume */}
                        <div>
                            <label className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-2 block">Volume estimé (DH)</label>
                            <div className="relative">
                                <BarChart3 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="number"
                                    value={form.volume}
                                    onChange={(e) => handleChange('volume', e.target.value)}
                                    placeholder="Ex: 5000"
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-8 py-3.5 bg-[#4318FF] hover:bg-[#3614D0] text-white rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]"
                        >
                            <Save className="w-5 h-5" />
                            Enregistrer
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({ name: '', phone: '', location: '', qrCode: '', activityType: '', volume: '' })}
                            className="flex items-center gap-2 px-6 py-3.5 bg-[#F4F7FE] text-[#A3AED0] hover:text-[#EE5D50] rounded-xl font-bold text-[15px] transition-all"
                        >
                            <X className="w-5 h-5" />
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewClientForm
