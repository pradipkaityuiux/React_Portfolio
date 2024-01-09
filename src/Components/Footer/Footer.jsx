import React from 'react'
import "./Footer.css"
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
  return (
    <div>
        <footer className="footer">
            <nav className="navFooter container">
                <div>
                    <ul className='nav__list_footer grid'>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#home" className='nav__link_footer active-link' >Home</a>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#about" className='nav__link_footer'>About</a>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#skills" className='nav__link_footer'>Skills</a>
                        </li>
                        {/* <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#services" className='nav__link_footer'><i className="uil uil-briefcase nav__icon"></i> Services</a>
                        </li> */}
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#blog" className='nav__link_footer'>Blog</a>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link_footer' to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#contact" className='nav__link_footer'>Contact</a>
                        </li>
                    </ul>
                </div>
                <p>© {new Date().getFullYear()} Pradip Kaity. All rights reserved.</p>
            </nav>
        </footer>
    </div>
  )
}

export default Footer