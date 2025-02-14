import React from 'react'
import logo from '../assets/img/Logo.png'

function Header() {
  return (
    <div className="container-fluid bg-dark text-center">
        <img className="py-4" src={logo} alt="Logo" />
    </div>
  )
}

export default Header