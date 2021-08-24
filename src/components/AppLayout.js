import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import GlobalStyles from "./styles/GlobalStyles"

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
