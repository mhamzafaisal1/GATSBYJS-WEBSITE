import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/globalstyles"
import Footer from './Footer'


const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
