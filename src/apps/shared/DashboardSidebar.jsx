import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({ label, icon: Icon, isActive, onClick, hasSubMenu, isOpen, toggleOpen }) => (
    <div className="relative">
        <div
            onClick={hasSubMenu ? toggleOpen : onClick}
            className={`relative flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${isActive && !hasSubMenu
                ? 'text-[#4318FF] font-bold bg-[#F4F7FE]'
                : 'text-[#A3AED0] hover:text-[#2B3674] hover:bg-[#F4F7FE] font-medium'
                }`}
        >
            {isActive && !hasSubMenu && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#4318FF] rounded-l-full" />
            )}
            <div className="flex items-center gap-3 relative z-10">
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#4318FF]' : 'text-[#A3AED0]'}`} />
                <span className={`text-[15px] tracking-wide ${isActive ? 'text-[#2B3674]' : ''}`}>{label}</span>
            </div>
            {hasSubMenu && (
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180 text-[#2B3674]' : 'text-[#A3AED0]'}`} />
            )}
        </div>
    </div>
)

const SubMenuItem = ({ label, isActive, onClick }) => (
    <div
        onClick={onClick}
        className={`py-2 px-12 cursor-pointer text-[14px] tracking-wide transition-all duration-300 rounded-lg relative ${isActive ? 'text-[#2B3674] font-bold bg-[#F4F7FE]' : 'text-[#A3AED0] hover:text-[#2B3674] font-medium'
            }`}
    >
        {isActive && (
            <span className="absolute left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4318FF]" />
        )}
        {label}
    </div>
)

const DashboardSidebar = ({ menuItems, currentPage, setCurrentPage, appName, appColor = '#4318FF' }) => {
    const [openMenus, setOpenMenus] = useState({})
    const navigate = useNavigate()

    const toggleMenu = (id) => {
        setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <aside className="w-[280px] flex flex-col bg-white border-r border-[#E0E5F2] h-full overflow-y-auto custom-scrollbar relative z-50 shadow-[4px_0_24px_rgba(112,144,176,0.08)]">
            {/* Logo */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: appColor }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-[#2B3674] tracking-tight">Dlivr</h1>
                </div>
                <div className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-center mb-4" style={{ backgroundColor: appColor + '18', color: appColor }}>
                    {appName}
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 flex flex-col px-4 pb-8 gap-1">
                {menuItems.map((item) => (
                    <div key={item.id} className="mb-1">
                        <MenuItem
                            label={item.label}
                            icon={item.icon}
                            isActive={item.subItems ? item.subItems.some(sub => sub.id === currentPage) : currentPage === item.id}
                            hasSubMenu={!!item.subItems}
                            isOpen={openMenus[item.id]}
                            toggleOpen={() => toggleMenu(item.id)}
                            onClick={() => setCurrentPage(item.id)}
                        />
                        {item.subItems && (
                            <AnimatePresence>
                                {openMenus[item.id] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden mt-1 flex flex-col gap-1 pr-2"
                                    >
                                        {item.subItems.map((sub) => (
                                            <SubMenuItem
                                                key={sub.id}
                                                label={sub.label}
                                                isActive={currentPage === sub.id}
                                                onClick={() => setCurrentPage(sub.id)}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                ))}
            </nav>

            {/* Logout */}
            <div className="p-4 mt-auto mb-4 mx-4">
                <button
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[#A3AED0] hover:text-[#EE5D50] hover:bg-[#FEECEE] transition-all duration-300 font-medium text-[15px]"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Déconnexion</span>
                </button>
            </div>

            {/* Bottom promo */}
            <div className="p-4 mb-6 mx-4 rounded-2xl relative overflow-hidden text-center shadow-[0_18px_40px_rgba(112,144,176,0.12)]" style={{ background: `linear-gradient(135deg, ${appColor}99, ${appColor})` }}>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white opacity-10 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white opacity-10 rounded-full" />
                <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ color: appColor }}>
                    <span className="font-bold text-lg">?</span>
                </div>
                <h3 className="text-white font-bold mb-1">Besoin d'aide?</h3>
                <p className="text-white/80 text-xs mb-3">Contactez-nous: 0676159221</p>
            </div>
        </aside>
    )
}

export default DashboardSidebar
