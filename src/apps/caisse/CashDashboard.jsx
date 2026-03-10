import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, ArrowDownRight, Banknote, Coins } from 'lucide-react'

const TRANSACTIONS = [
    { id: 1, type: 'in', label: 'Paiement client - Épicerie Al Baraka', amount: 2500, time: '08:30' },
    { id: 2, type: 'in', label: 'Paiement client - Supermarché Atlas', amount: 5000, time: '09:15' },
    { id: 3, type: 'out', label: 'Remboursement - Café du Centre', amount: 300, time: '10:00' },
    { id: 4, type: 'in', label: 'Paiement client - Grossiste Maroc', amount: 8500, time: '10:45' },
    { id: 5, type: 'out', label: 'Achat fournitures', amount: 450, time: '11:30' },
    { id: 6, type: 'in', label: 'Paiement client - Boulangerie LP', amount: 3200, time: '14:00' },
]

const CashDashboard = () => {
    const totalIn = TRANSACTIONS.filter(t => t.type === 'in').reduce((a, t) => a + t.amount, 0)
    const totalOut = TRANSACTIONS.filter(t => t.type === 'out').reduce((a, t) => a + t.amount, 0)
    const balance = totalIn - totalOut

    return (
        <div className="pb-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
                {[
                    { label: 'Solde Caisse', value: `${balance.toLocaleString()} DH`, icon: Banknote, color: 'bg-[#F4F7FE] text-[#4318FF]', change: '+12%' },
                    { label: 'Total Entrées', value: `${totalIn.toLocaleString()} DH`, icon: TrendingUp, color: 'bg-[#E6FFF5] text-[#05CD99]' },
                    { label: 'Total Sorties', value: `${totalOut.toLocaleString()} DH`, icon: TrendingDown, color: 'bg-[#FEECEE] text-[#EE5D50]' },
                    { label: 'Transactions', value: TRANSACTIONS.length, icon: CreditCard, color: 'bg-[#FFF4E5] text-[#FFCE20]' },
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
                                    {stat.change && <span className="text-sm font-bold text-[#05CD99] flex items-center"><ArrowUpRight className="w-3 h-3" />{stat.change}</span>}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6">
                <h3 className="text-xl font-bold text-[#2B3674] mb-6">Transactions du Jour</h3>
                <div className="space-y-3">
                    {TRANSACTIONS.map((tx, i) => (
                        <motion.div key={tx.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                            className="p-4 bg-[#F4F7FE] rounded-xl flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-[#E6FFF5] text-[#05CD99]' : 'bg-[#FEECEE] text-[#EE5D50]'}`}>
                                {tx.type === 'in' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-bold text-[#2B3674] truncate">{tx.label}</h4>
                                <p className="text-[13px] text-[#A3AED0] font-medium">{tx.time}</p>
                            </div>
                            <span className={`text-[16px] font-bold ${tx.type === 'in' ? 'text-[#05CD99]' : 'text-[#EE5D50]'}`}>
                                {tx.type === 'in' ? '+' : '-'}{tx.amount.toLocaleString()} DH
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CashDashboard
