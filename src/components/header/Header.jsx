import React from 'react'
import logo from "../../assets/images/logo.png"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import { User } from "./User"
import "./header.css"

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
          </div>
          <nav>
          <ul>
            {nav.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        <div className='account flexCenter'>
        <User />
      </div>
      </header>
    </>
  )
}

export default Header
