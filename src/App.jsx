import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Shared
import LoginPage from './apps/shared/LoginPage'
import LandingPage from './apps/shared/LandingPage'

// Role Apps
import PreventeApp from './apps/prevente/PreventeApp'
import VenteApp from './apps/vente/VenteApp'
import CaisseApp from './apps/caisse/CaisseApp'
import SuperviseurClientApp from './apps/superviseur-client/SuperviseurClientApp'
import SuperviseurDepotApp from './apps/superviseur-depot/SuperviseurDepotApp'
import ControleurApp from './apps/controleur/ControleurApp'
import ComptableApp from './apps/comptable/ComptableApp'
import DepotAdminApp from './apps/depot-admin/DepotAdminApp'
import ChefCommandeApp from './apps/chef-commande/ChefCommandeApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login / Role Selection */}
        <Route path="/login" element={<LoginPage />} />

        {/* Role Dashboards */}
        <Route path="/prevente" element={<PreventeApp />} />
        <Route path="/vente" element={<VenteApp />} />
        <Route path="/caisse" element={<CaisseApp />} />
        <Route path="/superviseur-client" element={<SuperviseurClientApp />} />
        <Route path="/superviseur-depot" element={<SuperviseurDepotApp />} />
        <Route path="/controleur" element={<ControleurApp />} />
        <Route path="/comptable" element={<ComptableApp />} />
        <Route path="/depot-admin" element={<DepotAdminApp />} />
        <Route path="/chef-commande" element={<ChefCommandeApp />} />

        {/* Default redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
