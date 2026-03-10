import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit3, Save, Trash2, Plus, Package, Search } from 'lucide-react'

const SAMPLE_ORDER = {
    client: 'Épicerie Al Baraka',
    orderId: '#CMD-1042',
    items: [
        { id: 1, name: 'Coca Cola 1.5L', quantity: 10, price: 12 },
        { id: 2, name: 'Eau Sidi Ali 1L', quantity: 24, price: 5 },
        { id: 3, name: 'Biscuits Tagger', quantity: 5, price: 8 },
    ]
}

const EditClientOrder = () => {
    const [items, setItems] = useState(SAMPLE_ORDER.items)

    const updateQuantity = (id, qty) => {
        setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(0, qty) } : item))
    }

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id))
    }

    const addItem = () => {
        const newId = Math.max(...items.map(i => i.id), 0) + 1
        setItems(prev => [...prev, { id: newId, name: 'Nouveau produit', quantity: 1, price: 0 }])
    }

    const total = items.reduce((a, i) => a + i.quantity * i.price, 0)

    return (
        <div className="pb-12 max-w-3xl mx-auto">
            {/* Order Info */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#2B3674]">Modifier la Commande</h3>
                    <span className="px-3 py-1 bg-[#F4F7FE] text-[#4318FF] rounded-full text-[13px] font-bold">{SAMPLE_ORDER.orderId}</span>
                </div>
                <p className="text-[15px] text-[#A3AED0] font-medium">Client: <span className="text-[#2B3674] font-bold">{SAMPLE_ORDER.client}</span></p>
            </div>

            {/* Items */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-[#2B3674]">Articles</h3>
                    <button onClick={addItem} className="flex items-center gap-1 px-4 py-2 bg-[#F4F7FE] text-[#4318FF] rounded-xl font-bold text-sm hover:bg-[#E9EDF7] transition-colors">
                        <Plus className="w-4 h-4" /> Ajouter
                    </button>
                </div>

                <div className="space-y-3">
                    {items.map((item, i) => (
                        <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                            className="p-4 bg-[#F4F7FE] rounded-xl flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#A3AED0]">
                                <Package className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-bold text-[#2B3674] truncate">{item.name}</h4>
                                <p className="text-[13px] text-[#A3AED0] font-medium">{item.price} DH / unité</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#2B3674] font-bold hover:bg-[#E0E5F2] transition-colors">−</button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                                    className="w-14 py-2 bg-white rounded-lg text-center text-[15px] font-bold text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
                                />
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#2B3674] font-bold hover:bg-[#E0E5F2] transition-colors">+</button>
                            </div>
                            <span className="text-[15px] font-bold text-[#2B3674] min-w-[80px] text-right">{(item.quantity * item.price).toLocaleString()} DH</span>
                            <button onClick={() => removeItem(item.id)} className="p-2 text-[#A3AED0] hover:text-[#EE5D50] transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Total */}
                <div className="mt-6 pt-4 border-t border-[#E0E5F2] flex justify-between items-center">
                    <span className="text-lg font-bold text-[#A3AED0]">Total</span>
                    <span className="text-2xl font-bold text-[#2B3674]">{total.toLocaleString()} DH</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="flex items-center gap-2 px-8 py-3.5 bg-[#4318FF] hover:bg-[#3614D0] text-white rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]">
                    <Save className="w-5 h-5" /> Sauvegarder
                </button>
                <button className="flex items-center gap-2 px-6 py-3.5 bg-[#F4F7FE] text-[#A3AED0] hover:text-[#EE5D50] rounded-xl font-bold text-[15px] transition-all">
                    Annuler
                </button>
            </div>
        </div>
    )
}

export default EditClientOrder
