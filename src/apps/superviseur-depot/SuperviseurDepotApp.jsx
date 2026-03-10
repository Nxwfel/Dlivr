import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import NewClientForm from '../prevente/NewClientForm'
import OrderSending from '../prevente/OrderSending'
import ClientSchedule from '../prevente/ClientSchedule'
import QRScanner from '../prevente/QRScanner'
import WarehouseFullView from './WarehouseFullView'
import ClientOverview from './ClientOverview'
import NotificationsPage from '../shared/NotificationsPage'
import { UserPlus, Send, CalendarClock, QrCode, Warehouse, Users, Bell } from 'lucide-react'

const MENU_ITEMS = [
    { id: 'new-client', label: 'Nouveau Client', icon: UserPlus },
    { id: 'send-order', label: 'Envoi Commande', icon: Send },
    { id: 'client-schedule', label: 'Planning Clients', icon: CalendarClock },
    { id: 'qr-scanner', label: 'Scanner QR', icon: QrCode },
    { id: 'warehouse-full', label: 'Vue Entrepôt', icon: Warehouse },
    { id: 'client-overview', label: 'Vue Clients', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const SuperviseurDepotApp = () => {
    const [currentPage, setCurrentPage] = useState('warehouse-full')

    const renderPage = () => {
        switch (currentPage) {
            case 'new-client': return <NewClientForm />
            case 'send-order': return <OrderSending />
            case 'client-schedule': return <ClientSchedule />
            case 'qr-scanner': return <QRScanner />
            case 'warehouse-full': return <WarehouseFullView />
            case 'client-overview': return <ClientOverview />
            case 'notifications': return <NotificationsPage />
            default: return <WarehouseFullView />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Superviseur Dépôt"
            appColor="#EE5D50"
            userRole="SuperviseurDepot"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default SuperviseurDepotApp
