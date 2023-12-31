import React, { useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const[toggle, showMenu]=useState(false);
    const navigate = useNavigate()

  return (
    <div>
        <header className="header">
            <nav className="nav container">
                <Link to={`/`} className="nav__logo">Smith</Link>
                {/* <a href="index.html" className="nav__logo">Smith</a> */}
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#home" className='nav__link active-link' ><i className="uil uil-estate nav__icon"></i> Home</a>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#about" className='nav__link'><i className="uil uil-user nav__icon"></i> About</a>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#skills" className='nav__link'><i className="uil uil-file-alt nav__icon"></i> Skills</a>
                        </li>
                        {/* <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#services" className='nav__link'><i className="uil uil-briefcase nav__icon"></i> Services</a>
                        </li> */}
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#blog" className='nav__link'><i class='bx bx-book-open nav__icon'></i> Blog</a>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' to={'/portfolio'}><i className="uil uil-scenery nav__icon"></i> Portfolio</Link>
                        </li>
                        <li className="nav__item" onClick={()=>navigate('/')}>
                            <a href="#contact" className='nav__link'><i className="uil uil-message nav__icon"></i> Contact</a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={()=>showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=>showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </div>
  )
}
