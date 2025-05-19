import HorseBlack from '../../../assets/horse-black.svg'
import HorseWhite from '../../../assets/horse-white.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {

  return (
    
    <div>
      <nav className={`navbar fixed-top ${styles.containerNav}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
           <img src={HorseWhite} className={`navbar-logo ${styles.navbarLogo}`}/>
          </a>
          <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span>MENU</span>
          </button>
          <div className={`offcanvas offcanvas-top bg-light ${styles.offcanvas}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className={`offcanvas-header ${styles.offcanvasHeader}`}>
              <h5 className={`offcanvas-title ${styles.offcanvasTitle}`} id="offcanvasNavbarLabel">
                <img src={HorseBlack} className={`offcanvas-logo ${styles.offcanvasLogo}` }/>
              </h5>
              <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="offcanvas" data-bs-target="#my-offcanvas" aria-label="Close"></button>
            </div>
            <div className={`offcanvas-body ${styles.offcanvasBody}`} id='header'>
              <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${styles.navbarNav}`} id='menu'>
                <li className={`nav-item ${styles.navItem}`}>
                  <p></p>
                  <a aria-current="page"><Link className={`nav-link ${styles.navLink}`} to="/">INÍCIO</Link></a>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                <p></p>
                  <a className={`nav-link ${styles.navLink} ${styles.webinarLink}`} href="/webinar">WEBINAR HORSENET</a>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                <p></p>
                  <a><Link to="/faq" className={`nav-link ${styles.navLink}`}>PERGUNTAS FREQUENTES</Link></a>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                <p></p>
                  <a className={`nav-link ${styles.navLink}`} href="/horsenet">HORSENET</a>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                <p></p>
                  <a className={`nav-link ${styles.navLink}`} href="/videosDois">VÍDEOS</a>
                </li>
                <li className={`nav-item ${styles.navItem}`}>
                <p></p>
                  <a className={`nav-link ${styles.navLink}`} href="#">SERVICENOW</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header