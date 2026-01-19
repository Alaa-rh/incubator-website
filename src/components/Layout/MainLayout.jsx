import React from "react"
import Footer from "./Footer"

const MainLayout = ({ children, header }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* الهيدر */}
      {header}

      {/* المحتوى */}
      <main className="flex-1 mt-20">
        {children}
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  )
}

export default MainLayout