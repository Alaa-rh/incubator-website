import React from "react"
import Footer from "./Footer"

const Layout = ({ children, header }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* الهيدر */}
      {header}

      {/* المحتوى */}
      <main className="flex-1">
        {children}
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  )
}

export default Layout