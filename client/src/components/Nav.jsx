import React from 'react'
import { Link } from 'react-router-dom'
import '../nav.css'

const Nav = () => {
    return (
        <div className= 'navbar'>
            <div className = 'logo'>
            <img src = {'/img/logo.png'} alt = 'logo' className = 'logo-img'/>
            </div>
            <Link to = '/' className= 'link'>Home </Link>
            <Link to = '/about' className= 'link'>About </Link>
            <Link to = '/ticket' className= 'link'>Tickets </Link>
            <Link to = '/ride' className= 'link'>Rides </Link>
            <Link to = '/entry' className= 'link'>Entry </Link>
        </div>
    )
}

export default Nav