import React from 'react'
import "./Header.css"
import Home from './Services'
import Home from './AboutUs'
import Home from './Testimonials'
import Home from './Contact'
import { Link, Route,Routes } from 'react-router-dom';
function Header() {
  return (
    <div>
        <div className='heading1'>
            <h1>Media Tech</h1> 
      <ul className='link'>
        <li>
        <Link to="/Home" className='firstlink' >Home</Link>
         <Link to="/Services" className='firstlink' >Services</Link>
         <Link to="/AboutUs" className='secondlink'>AboutUs</Link>
         <Link to="/Testimonials" className='secondlink'>Testimonials</Link>
         <Link to="/Contact" className='secondlink'>Contact</Link>
       </li>
     </ul>
     
        </div>
    </div>
  )
}


export default Header