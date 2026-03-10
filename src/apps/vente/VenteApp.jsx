import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import MyClientsList from './MyClientsList'
import VehicleStock from './VehicleStock'
import CreditTracker from './CreditTracker'
import EditClientOrder from './EditClientOrder'
import TruckTracker from './TruckTracker'
import ClientMapView from './ClientMapView'
import NotificationsPage from '../shared/NotificationsPage'
import { Users, Package, CreditCard, Edit3, Truck, MapPin, Bell } from 'lucide-react'

const MENU_ITEMS = [
    { id: 'my-clients', label: 'Mes Clients', icon: Users },
    { id: 'vehicle-stock', label: 'Stock Véhicule', icon: Package },
    { id: 'credit-tracker', label: 'Suivi Crédits', icon: CreditCard },
    { id: 'edit-order', label: 'Modifier Commande', icon: Edit3 },
    { id: 'truck-tracker', label: 'Suivi Camion', icon: Truck },
    { id: 'client-map', label: 'Carte Clients', icon: MapPin },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const VenteApp = () => {
    const [currentPage, setCurrentPage] = useState('my-clients')

    const renderPage = () => {
        switch (currentPage) {
            case 'my-clients': return <MyClientsList />
            case 'vehicle-stock': return <VehicleStock />
            case 'credit-tracker': return <CreditTracker />
            case 'edit-order': return <EditClientOrder />
            case 'truck-tracker': return <TruckTracker />
            case 'client-map': return <ClientMapView />
            case 'notifications': return <NotificationsPage />
            default: return <MyClientsList />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Vente / Livraison"
            appColor="#05CD99"
            userRole="Vente"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default VenteApp
