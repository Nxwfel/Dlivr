import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import CreditTracker from '../vente/CreditTracker'
import WarehouseFullView from '../superviseur-depot/WarehouseFullView'
import CashDashboard from '../caisse/CashDashboard'
import AddRoleForm from './AddRoleForm'
import GlobalDashboard from './GlobalDashboard'
import NotificationsPage from '../shared/NotificationsPage'
import {
    LayoutDashboard, CreditCard, Warehouse, Banknote,
    UserPlus, Truck as TruckIcon, Calculator, PackageCheck, Eye, Bell, Users
} from 'lucide-react'

const MENU_ITEMS = [
    { id: 'global-dashboard', label: 'Dashboard Global', icon: LayoutDashboard },
    { id: 'clients-credits', label: 'Clients & Crédits', icon: CreditCard },
    { id: 'warehouse-view', label: 'Vue Entrepôt', icon: Warehouse },
    {
        id: 'roles', label: 'Gestion Rôles', icon: Users, subItems: [
            { id: 'add-superviseur', label: 'Ajouter Superviseur' },
            { id: 'add-vendeur', label: 'Ajouter Vendeur' },
            { id: 'add-comptable', label: 'Ajouter Comptable' },
            { id: 'add-chef-commande', label: 'Ajouter Chef Commande' },
            { id: 'add-controleur', label: 'Ajouter Contrôleur' },
        ]
    },
    { id: 'caisse-overview', label: 'Vue Caisse', icon: Banknote },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const DepotAdminApp = () => {
    const [currentPage, setCurrentPage] = useState('global-dashboard')

    const renderPage = () => {
        switch (currentPage) {
            case 'global-dashboard': return <GlobalDashboard />
            case 'clients-credits': return <CreditTracker />
            case 'warehouse-view': return <WarehouseFullView />
            case 'add-superviseur':
            case 'add-vendeur':
            case 'add-comptable':
            case 'add-chef-commande':
            case 'add-controleur':
                return <AddRoleForm roleKey={currentPage} />
            case 'caisse-overview': return <CashDashboard />
            case 'notifications': return <NotificationsPage />
            default: return <GlobalDashboard />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Dépôt Admin"
            appColor="#4895EF"
            userRole="DepotAdmin"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default DepotAdminApp
