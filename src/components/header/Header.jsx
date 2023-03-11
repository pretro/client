import React from 'react'
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
