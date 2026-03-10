import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import NewClientForm from '../prevente/NewClientForm'
import OrderSending from '../prevente/OrderSending'
import ClientSchedule from '../prevente/ClientSchedule'
import QRScanner from '../prevente/QRScanner'
import AdminEntryPanel from './AdminEntryPanel'
import NotificationsPage from '../shared/NotificationsPage'
import { UserPlus, Send, CalendarClock, QrCode, ShieldCheck, Bell } from 'lucide-react'

const MENU_ITEMS = [
    { id: 'new-client', label: 'Nouveau Client', icon: UserPlus },
    { id: 'send-order', label: 'Envoi Commande', icon: Send },
    { id: 'client-schedule', label: 'Planning Clients', icon: CalendarClock },
    { id: 'qr-scanner', label: 'Scanner QR', icon: QrCode },
    { id: 'admin-entry', label: 'Panneau Admin', icon: ShieldCheck },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const SuperviseurClientApp = () => {
    const [currentPage, setCurrentPage] = useState('new-client')

    const renderPage = () => {
        switch (currentPage) {
            case 'new-client': return <NewClientForm />
            case 'send-order': return <OrderSending />
            case 'client-schedule': return <ClientSchedule />
            case 'qr-scanner': return <QRScanner />
            case 'admin-entry': return <AdminEntryPanel />
            case 'notifications': return <NotificationsPage />
            default: return <NewClientForm />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Superviseur Client"
            appColor="#FF6B35"
            userRole="SuperviseurClient"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default SuperviseurClientApp
