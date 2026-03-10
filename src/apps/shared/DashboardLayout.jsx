import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'

const DashboardLayout = ({ children, menuItems, currentPage, setCurrentPage, appName, appColor, userRole }) => {
  return (
    <div className="flex font-sans h-screen bg-[#F4F7FE] overflow-hidden text-[#2B3674]">
      <DashboardSidebar
        menuItems={menuItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        appName={appName}
        appColor={appColor}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader title={currentPage} userRole={userRole} />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full max-w-7xl mx-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
