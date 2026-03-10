import React from 'react'
import { motion } from 'framer-motion'
import { Bell, AlertTriangle, CheckCircle, Info, X } from 'lucide-react'

const SAMPLE_NOTIFICATIONS = [
    { id: 1, type: 'success', title: 'Commande livrée', desc: 'La commande #1042 a été livrée avec succès.', time: 'Il y a 5 min' },
    { id: 2, type: 'warning', title: 'Stock faible', desc: 'Le produit "Coca Cola 1.5L" est presque en rupture.', time: 'Il y a 15 min' },
    { id: 3, type: 'info', title: 'Nouveau client', desc: 'Un nouveau client a été ajouté par l\'équipe prévente.', time: 'Il y a 1h' },
    { id: 4, type: 'error', title: 'Paiement échoué', desc: 'Le paiement du client "Épicerie Maroc" a échoué.', time: 'Il y a 2h' },
    { id: 5, type: 'success', title: 'Synchronisation OK', desc: 'Toutes les données ont été synchronisées.', time: 'Il y a 3h' },
]

const ICON_MAP = {
    success: CheckCircle,
    warning: AlertTriangle,
    info: Info,
    error: AlertTriangle,
}

const COLOR_MAP = {
    success: { bg: '#E6FFF5', text: '#05CD99', border: '#05CD99' },
    warning: { bg: '#FFF4E5', text: '#FFCE20', border: '#FFCE20' },
    info: { bg: '#F4F7FE', text: '#4318FF', border: '#4318FF' },
    error: { bg: '#FEECEE', text: '#EE5D50', border: '#EE5D50' },
}

const NotificationsPage = () => {
    return (
        <div className="pb-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] rounded-full bg-[#F4F7FE] flex items-center justify-center text-[#4318FF]">
                        <Bell className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#2B3674]">Notifications</h3>
                        <p className="text-sm text-[#A3AED0] font-medium">{SAMPLE_NOTIFICATIONS.length} nouvelles</p>
                    </div>
                </div>
                <button className="px-4 py-2 bg-[#F4F7FE] text-[#A3AED0] hover:text-[#4318FF] rounded-xl text-sm font-bold transition-colors">
                    Tout marquer lu
                </button>
            </div>

            {/* Notification list */}
            <div className="space-y-3">
                {SAMPLE_NOTIFICATIONS.map((notif, i) => {
                    const Icon = ICON_MAP[notif.type]
                    const colors = COLOR_MAP[notif.type]
                    return (
                        <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="p-5 bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] flex items-start gap-4 border-l-4 transition-all hover:shadow-[0px_18px_40px_rgba(112,144,176,0.2)]"
                            style={{ borderLeftColor: colors.border }}
                        >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bg, color: colors.text }}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-bold text-[#2B3674] mb-0.5">{notif.title}</h4>
                                <p className="text-[13px] text-[#A3AED0] font-medium">{notif.desc}</p>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-[12px] text-[#A3AED0] font-medium whitespace-nowrap">{notif.time}</span>
                                <button className="p-1 text-[#A3AED0] hover:text-[#EE5D50] transition-colors">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotificationsPage
