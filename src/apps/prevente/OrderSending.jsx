import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Package, Warehouse, CheckCircle, Plus, Trash2, Search } from 'lucide-react'

const SAMPLE_WAREHOUSES = [
    { id: 1, name: 'Dépôt Central Casablanca', location: 'Casablanca', status: 'active' },
    { id: 2, name: 'Dépôt Rabat Nord', location: 'Rabat', status: 'active' },
    { id: 3, name: 'Dépôt Marrakech', location: 'Marrakech', status: 'active' },
    { id: 4, name: 'Dépôt Fès', location: 'Fès', status: 'inactive' },
]

const SAMPLE_PRODUCTS = [
    { id: 1, name: 'Coca Cola 1.5L', price: 12, unit: 'pack' },
    { id: 2, name: 'Eau Sidi Ali 1L', price: 5, unit: 'pack' },
    { id: 3, name: 'Jus Valencia 1L', price: 15, unit: 'carton' },
    { id: 4, name: 'Biscuits Tagger', price: 8, unit: 'carton' },
    { id: 5, name: 'Lait Centrale 1L', price: 7, unit: 'carton' },
]

const OrderSending = () => {
    const [selectedWarehouses, setSelectedWarehouses] = useState([])
    const [orderItems, setOrderItems] = useState([{ productId: '', quantity: 1 }])
    const [clientName, setClientName] = useState('')

    const toggleWarehouse = (id) => {
        setSelectedWarehouses(prev =>
            prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
        )
    }

    const addItem = () => {
        setOrderItems(prev => [...prev, { productId: '', quantity: 1 }])
    }

    const removeItem = (index) => {
        setOrderItems(prev => prev.filter((_, i) => i !== index))
    }

    const updateItem = (index, field, value) => {
        setOrderItems(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item))
    }

    return (
        <div className="pb-12">
            {/* Client */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <h3 className="text-xl font-bold text-[#2B3674] tracking-tight mb-4">Détails Client</h3>
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Rechercher un client..."
                        className="w-full pl-12 pr-4 py-3.5 bg-[#F4F7FE] rounded-xl text-[15px] text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#4318FF] transition-all font-medium"
                    />
                </div>
            </div>

            {/* Warehouses */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <h3 className="text-xl font-bold text-[#2B3674] tracking-tight mb-4">Sélectionner les Dépôts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SAMPLE_WAREHOUSES.map((wh) => {
                        const selected = selectedWarehouses.includes(wh.id)
                        return (
                            <motion.div
                                key={wh.id}
                                whileHover={{ y: -1 }}
                                onClick={() => wh.status === 'active' && toggleWarehouse(wh.id)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 ${wh.status === 'inactive'
                                        ? 'opacity-40 cursor-not-allowed border-transparent bg-[#F4F7FE]'
                                        : selected
                                            ? 'border-[#4318FF] bg-[#F4F7FE]'
                                            : 'border-transparent bg-[#F4F7FE] hover:border-[#E0E5F2]'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? 'bg-[#4318FF] text-white' : 'bg-white text-[#A3AED0]'}`}>
                                    <Warehouse className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-bold text-[#2B3674]">{wh.name}</h4>
                                    <p className="text-[13px] text-[#A3AED0] font-medium">{wh.location}</p>
                                </div>
                                {selected && <CheckCircle className="w-5 h-5 text-[#4318FF]" />}
                                {wh.status === 'inactive' && <span className="text-[12px] text-[#EE5D50] font-bold">Inactif</span>}
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-[20px] shadow-[0px_18px_40px_rgba(112,144,176,0.12)] p-6 mb-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#2B3674] tracking-tight">Articles de la Commande</h3>
                    <button onClick={addItem} className="flex items-center gap-1 px-4 py-2 bg-[#F4F7FE] text-[#4318FF] rounded-xl font-bold text-sm hover:bg-[#E9EDF7] transition-colors">
                        <Plus className="w-4 h-4" /> Ajouter
                    </button>
                </div>

                <div className="space-y-3">
                    {orderItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-[#F4F7FE] rounded-xl">
                            <select
                                value={item.productId}
                                onChange={(e) => updateItem(index, 'productId', e.target.value)}
                                className="flex-1 py-3 px-4 bg-white rounded-lg text-[15px] text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-medium appearance-none cursor-pointer"
                            >
                                <option value="">Sélectionner un produit</option>
                                {SAMPLE_PRODUCTS.map(p => (
                                    <option key={p.id} value={p.id}>{p.name} — {p.price} DH / {p.unit}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                                className="w-24 py-3 px-4 bg-white rounded-lg text-[15px] text-[#2B3674] text-center focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-bold"
                            />
                            {orderItems.length > 1 && (
                                <button onClick={() => removeItem(index)} className="p-2 text-[#A3AED0] hover:text-[#EE5D50] transition-colors">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit */}
            <button className="flex items-center gap-2 px-8 py-3.5 bg-[#4318FF] hover:bg-[#3614D0] text-white rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_24px_rgba(67,24,255,0.3)]">
                <Send className="w-5 h-5" />
                Envoyer la Commande
            </button>
        </div>
    )
}

export default OrderSending
