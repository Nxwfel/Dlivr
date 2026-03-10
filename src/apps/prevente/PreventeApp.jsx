import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import NewClientForm from './NewClientForm'
import OrderSending from './OrderSending'
import ClientSchedule from './ClientSchedule'
import QRScanner from './QRScanner'
import NotificationsPage from '../shared/NotificationsPage'
import { UserPlus, Send, CalendarClock, QrCode, Bell } from 'lucide-react'

const MENU_ITEMS = [
    { id: 'new-client', label: 'Nouveau Client', icon: UserPlus },
    { id: 'send-order', label: 'Envoi Commande', icon: Send },
    { id: 'client-schedule', label: 'Planning Clients', icon: CalendarClock },
    { id: 'qr-scanner', label: 'Scanner QR', icon: QrCode },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const PreventeApp = () => {
    const [currentPage, setCurrentPage] = useState('new-client')

    const renderPage = () => {
        switch (currentPage) {
            case 'new-client': return <NewClientForm />
            case 'send-order': return <OrderSending />
            case 'client-schedule': return <ClientSchedule />
            case 'qr-scanner': return <QRScanner />
            case 'notifications': return <NotificationsPage />
            default: return <NewClientForm />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Prévente"
            appColor="#4361EE"
            userRole="Prevente"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default PreventeApp
