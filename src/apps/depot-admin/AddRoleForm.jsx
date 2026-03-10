import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, Shield, Save, Lock, Briefcase } from 'lucide-react'

const ROLES_CONFIG = {
    'add-superviseur': { title: 'Ajouter Superviseur', roleLabel: 'Superviseur', color: '#EE5D50' },
    'add-vendeur': { title: 'Ajouter Vendeur', roleLabel: 'Vendeur', color: '#05CD99' },
    'add-comptable': { title: 'Ajouter Comptable', roleLabel: 'Comptable', color: '#7B61FF' },
    'add-chef-commande': { title: 'Ajouter Chef de Commande', roleLabel: 'Chef de Commande', color: '#8B6914' },
    'add-controleur': { title: 'Ajouter Contrôleur', roleLabel: 'Contrôleur', color: '#2B3674' },
}

const AddRoleForm = ({ roleKey }) => {
    const config = ROLES_CONFIG[roleKey] || { title: 'Ajouter Utilisateur', roleLabel: 'Utilisateur', color: '#4318FF' }
    const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', password: '' })

    const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

    const isVendeur = roleKey === 'add-vendeur'

    return (
        <div className="pb-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center" style={{ backgroundColor: config.color + '18', color: config.color }}>
                        <Shield className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#2B3674]">{config.title}</h3>
                        <p className="text-[13px] text-[#A3AED0] font-medium">Rôle: {config.roleLabel}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { field: 'name', placeholder: 'Nom complet', icon: User },
                        { field: 'email', placeholder: 'Email', icon: Mail, type: 'email' },
                        { field: 'phone', placeholder: 'Téléphone', icon: Phone, type: 'tel' },
                        { field: 'location', placeholder: 'Localisation', icon: MapPin },
                        { field: 'password', placeholder: 'Mot de passe', icon: Lock, type: 'password' },
                    ].map((item) => (
                        <div key={item.field} className="relative">
                            <item.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                            <input
                                type={item.type || 'text'}
                                value={form[item.field]}
                                onChange={(e) => handleChange(item.field, e.target.value)}
                                placeholder={item.placeholder}
                                className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-medium"
                            />
                        </div>
                    ))}

                    {isVendeur && (
                        <>
                            <div className="pt-2 border-t border-[#E0E5F2]">
                                <p className="text-[13px] font-bold text-[#A3AED0] uppercase tracking-wide mb-3">Profil Complet Vendeur</p>
                            </div>
                            {[
                                { placeholder: 'CIN / ID National', icon: Briefcase },
                                { placeholder: 'Véhicule assigné', icon: Briefcase },
                                { placeholder: 'Zone de livraison', icon: MapPin },
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <item.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                    <input
                                        type="text"
                                        placeholder={item.placeholder}
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-medium"
                                    />
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <button className="mt-6 flex items-center gap-2 px-8 py-3.5 bg-[#4318FF] hover:bg-[#3614D0] text-white rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]">
                    <Save className="w-5 h-5" /> Enregistrer
                </button>
            </div>
        </div>
    )
}

export default AddRoleForm
