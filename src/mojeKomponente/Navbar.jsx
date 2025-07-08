import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {


  return (
    <nav>

        <ul className='nav-list'>
            <li><Link to="/pocetna">Pocetna</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/recepti">Recepti</Link></li>
            <li><Link to="/brojac">Brojac</Link></li>
        </ul>


    </nav>
  )
}

export default Navbar