import React from 'react'
import Header from './header'
import Footer from './footer'

export default ({children, className}) => (
  <div className={className || null}>
    <Header />
      {children}
    <Footer />
  </div>
)
