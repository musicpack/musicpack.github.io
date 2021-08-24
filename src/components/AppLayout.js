import React from "react"
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

export default AppLayout
