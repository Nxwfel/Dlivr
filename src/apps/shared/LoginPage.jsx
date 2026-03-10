import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ClipboardList, Truck, Landmark, Shield, Warehouse, Eye,
    Calculator, Building2, PackageCheck, LogIn, Lock, User
} from 'lucide-react'

const ROLES = [
    { id: 'prevente', label: 'Prévente', icon: ClipboardList, color: '#4361EE', desc: 'Gestion pré-vente & clients' },
    { id: 'vente', label: 'Vente', icon: Truck, color: '#05CD99', desc: 'Livraison & suivi terrain' },
    { id: 'caisse', label: 'Caisse', icon: Landmark, color: '#FFCE20', desc: 'Résumé de caisse' },
    { id: 'superviseur-client', label: 'Superviseur Client', icon: Shield, color: '#FF6B35', desc: 'Admin clients' },
    { id: 'superviseur-depot', label: 'Superviseur Dépôt', icon: Warehouse, color: '#EE5D50', desc: 'Gestion entrepôt' },
    { id: 'controleur', label: 'Contrôleur', icon: Eye, color: '#2B3674', desc: 'Suivi en direct' },
    { id: 'comptable', label: 'Comptable', icon: Calculator, color: '#7B61FF', desc: 'Vue financière' },
    { id: 'depot-admin', label: 'Dépôt Admin', icon: Building2, color: '#4895EF', desc: 'Administration globale' },
    { id: 'chef-commande', label: 'Chef de Commande', icon: PackageCheck, color: '#8B6914', desc: 'Coordination commandes' },
]

const LoginPage = () => {
    const navigate = useNavigate()
    const [selectedRole, setSelectedRole] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (selectedRole) {
            navigate(`/${selectedRole}`)
        }
    }

    return (
        <div className="min-h-screen bg-[#F4F7FE] flex items-center justify-center p-6 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl"
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#4318FF] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-[#2B3674] tracking-tight">Dlivr</h1>
                    </div>
                    <p className="text-[#A3AED0] text-lg font-medium">Sélectionnez votre rôle pour continuer</p>
                </div>

                {/* Role Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {ROLES.map((role, index) => {
                        const Icon = role.icon
                        const isSelected = selectedRole === role.id
                        return (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedRole(role.id)}
                                className={`p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] cursor-pointer transition-all duration-300 border-2 ${isSelected
                                    ? 'border-[#4318FF] scale-[1.02]'
                                    : 'border-transparent hover:shadow-[0px_18px_40px_rgba(112,144,176,0.2)]'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: role.color + '18', color: role.color }}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-[#2B3674]">{role.label}</h3>
                                        <p className="text-[13px] text-[#A3AED0] font-medium">{role.desc}</p>
                                    </div>
                                </div>
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-3 right-3 w-6 h-6 bg-[#4318FF] rounded-full flex items-center justify-center"
                                    >
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* Login Form */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedRole ? 1 : 0.4 }}
                    className="max-w-md mx-auto"
                >
                    <form onSubmit={handleLogin} className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-8">
                        <h3 className="text-xl font-bold text-[#2B3674] mb-6 text-center">Connexion</h3>

                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="text"
                                    placeholder="Nom d'utilisateur"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!selectedRole}
                            className={`w-full mt-6 py-3.5 rounded-xl font-bold text-white text-[16px] transition-all duration-300 flex items-center justify-center gap-2 ${selectedRole
                                ? 'bg-[#4318FF] hover:bg-[#3614D0] shadow-[0_8px_24px_rgba(67,24,255,0.3)] cursor-pointer'
                                : 'bg-[#A3AED0] cursor-not-allowed'
                                }`}
                        >
                            <LogIn className="w-5 h-5" />
                            Connexion
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LoginPage
