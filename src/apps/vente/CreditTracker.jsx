import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, AlertTriangle, CheckCircle, DollarSign, Clock, User, Search } from 'lucide-react'

const CREDITS = [
    { id: 1, client: 'Épicerie Al Baraka', amount: 2500, paid: 1800, date: '2026-02-28', status: 'partial' },
    { id: 2, client: 'Supermarché Atlas', amount: 5000, paid: 5000, date: '2026-03-01', status: 'paid' },
    { id: 3, client: 'Café du Centre', amount: 1200, paid: 0, date: '2026-03-05', status: 'unpaid' },
    { id: 4, client: 'Grossiste Maroc Dist.', amount: 8500, paid: 4000, date: '2026-02-20', status: 'partial' },
    { id: 5, client: 'Boulangerie La Parisienne', amount: 3200, paid: 3200, date: '2026-03-08', status: 'paid' },
    { id: 6, client: 'Mini Market Express', amount: 1500, paid: 200, date: '2026-03-02', status: 'unpaid' },
]

const STATUS_MAP = {
    paid: { label: 'Payé', color: '#05CD99', bg: '#E6FFF5', icon: CheckCircle },
    partial: { label: 'Partiel', color: '#FFCE20', bg: '#FFF4E5', icon: Clock },
    unpaid: { label: 'Impayé', color: '#EE5D50', bg: '#FEECEE', icon: AlertTriangle },
}

const CreditTracker = () => {
    const totalCredit = CREDITS.reduce((a, c) => a + c.amount, 0)
    const totalPaid = CREDITS.reduce((a, c) => a + c.paid, 0)
    const totalUnpaid = totalCredit - totalPaid

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                    { label: 'Total Crédits', value: `${totalCredit.toLocaleString()} DH`, icon: CreditCard, color: 'bg-[#F4F7FE] text-[#4318FF]' },
                    { label: 'Total Payé', value: `${totalPaid.toLocaleString()} DH`, icon: DollarSign, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Reste à Payer', value: `${totalUnpaid.toLocaleString()} DH`, icon: AlertTriangle, color: 'bg-[#FEECEE] text-[#EE5D50]' },
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

            {/* Table */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-6">Suivi des Crédits</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#E0E5F2]">
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Client</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Montant</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Payé</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Reste</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Date</th>
                                <th className="py-3 px-4 text-[13px] font-bold text-[#A3AED0] uppercase">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CREDITS.map((credit, i) => {
                                const status = STATUS_MAP[credit.status]
                                const remaining = credit.amount - credit.paid
                                const pct = Math.round((credit.paid / credit.amount) * 100)
                                return (
                                    <motion.tr key={credit.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                                        className="hover:bg-[#F4F7FE]/50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-[#A3AED0]" />
                                                <span className="text-[15px] font-bold text-[#2B3674]">{credit.client}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-[15px] font-bold text-[#2B3674]">{credit.amount.toLocaleString()} DH</td>
                                        <td className="py-4 px-4 text-[15px] font-bold text-[#05CD99]">{credit.paid.toLocaleString()} DH</td>
                                        <td className="py-4 px-4 text-[15px] font-bold text-[#EE5D50]">{remaining.toLocaleString()} DH</td>
                                        <td className="py-4 px-4 text-[14px] text-[#A3AED0] font-medium">{credit.date}</td>
                                        <td className="py-4 px-4">
                                            <span className="px-3 py-1 rounded-full text-[12px] font-bold" style={{ backgroundColor: status.bg, color: status.color }}>
                                                {status.label}
                                            </span>
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

export default CreditTracker
