import React, { useState } from 'react'
import DashboardLayout from '../shared/DashboardLayout'
import CashDashboard from './CashDashboard'
import NotificationsPage from '../shared/NotificationsPage'
import { LayoutDashboard, Bell } from 'lucide-react'

const MENU_ITEMS = [
    { id: 'cash-dashboard', label: 'Tableau de Bord', icon: LayoutDashboard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
]

const CaisseApp = () => {
    const [currentPage, setCurrentPage] = useState('cash-dashboard')

    const renderPage = () => {
        switch (currentPage) {
            case 'cash-dashboard': return <CashDashboard />
            case 'notifications': return <NotificationsPage />
            default: return <CashDashboard />
        }
    }

    return (
        <DashboardLayout
            menuItems={MENU_ITEMS}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            appName="Caisse"
            appColor="#FFCE20"
            userRole="Caisse"
        >
            {renderPage()}
        </DashboardLayout>
    )
}

export default CaisseApp
