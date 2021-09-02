import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import GlobalStyles from "./styles/GlobalStyles"
import Sidebar from "./Sidebar"

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarToggle = useCallback(() => {
    console.log(sidebarOpen)
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  return (
    <>
      <GlobalStyles />
      <Sidebar sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
      <Header sidebarToggle={sidebarToggle} />
      <main>{children}</main>
    </>
  )
}

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
