import React from 'react'
import { Bell, Search, Settings, Info } from 'lucide-react'

const PAGE_TITLES = {
    // Prévente
    'new-client': 'Nouveau Client',
    'send-order': 'Envoi Commande',
    'client-schedule': 'Planning Clients',
    'qr-scanner': 'Scanner QR',
    // Vente
    'my-clients': 'Mes Clients',
    'vehicle-stock': 'Stock Véhicule',
    'credit-tracker': 'Suivi Crédits',
    'edit-order': 'Modifier Commande',
    'truck-tracker': 'Suivi Camion',
    'client-map': 'Carte Clients',
    // Caisse
    'cash-dashboard': 'Tableau de Bord Caisse',
    // Superviseur Client
    'admin-entry': 'Panneau Admin',
    // Superviseur Dépôt
    'warehouse-full': 'Vue Entrepôt',
    'client-overview': 'Vue Clients',
    // Contrôleur
    'live-map': 'Carte en Direct',
    // Comptable
    'comptable-dashboard': 'Tableau de Bord',
    // Dépôt Admin
    'clients-credits': 'Clients & Crédits',
    'warehouse-view': 'Vue Entrepôt',
    'add-superviseur': 'Ajouter Superviseur',
    'add-vendeur': 'Ajouter Vendeur',
    'add-comptable': 'Ajouter Comptable',
    'add-chef-commande': 'Ajouter Chef de Commande',
    'add-controleur': 'Ajouter Contrôleur',
    'caisse-overview': 'Vue Caisse',
    'global-dashboard': 'Tableau de Bord Global',
    // Chef de Commande
    'incoming-orders': 'Commandes Entrantes',
    'coordination': 'Coordination',
    'warehouse-shipping': 'Entrepôt & Expédition',
    // Shared
    'notifications': 'Notifications',
}

const DashboardHeader = ({ title, userRole }) => {
    const displayTitle = PAGE_TITLES[title] || title

    return (
        <header className="h-24 px-8 pt-4 flex items-center justify-between border-b-0 sticky top-0 z-40 bg-transparent backdrop-blur-[10px]">
            <div>
                <p className="text-sm font-medium text-[#A3AED0] mb-1">
                    Pages <span className="mx-1">/</span> {displayTitle}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[#2B3674]">{displayTitle}</h2>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-full p-2.5 shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
                <div className="relative hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B3674]" />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-56 pl-10 pr-4 py-2.5 bg-[#F4F7FE] rounded-full text-sm text-[#2B3674] placeholder-[#A3AED0] focus:outline-none focus:ring-1 focus:ring-[#4318FF] transition-all"
                    />
                </div>
                <button className="relative p-2 text-[#A3AED0] hover:text-[#4318FF] transition-colors rounded-full">
                    <Bell className="w-[18px] h-[18px]" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#EE5D50] rounded-full" />
                </button>
                <button className="relative p-2 text-[#A3AED0] hover:text-[#4318FF] transition-colors rounded-full">
                    <Info className="w-[18px] h-[18px]" />
                </button>
                <button className="relative p-2 text-[#A3AED0] hover:text-[#4318FF] transition-colors rounded-full">
                    <Settings className="w-[18px] h-[18px]" />
                </button>
                <button className="w-10 h-10 rounded-full overflow-hidden focus:outline-none transition-all duration-300 ml-1">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole || 'Dlivr'}&backgroundColor=4318FF`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </header>
    )
}

export default DashboardHeader
