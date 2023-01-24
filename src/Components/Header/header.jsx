import { useState } from 'react'
import './header.css'
import img from './IMAGE.png'




const Header = () => {

  const [nav,setNav] = useState(false)


  return(
    <div>
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo"><img src={img} alt="logo"  /></a>
          <div className="header__navigation">
            <nav className={ nav ? "header__menu menu _active" : "header__menu menu"}>
              <ul className="menu__body">
                <li class="menu__item"><a href="#require" className="menu__link text">Listings</a></li>
                <li class="menu__item"><a href="#works" className="menu__link text">Houses</a></li>
                <li class="menu__item"><a href="#team" className="menu__link text">Our team</a></li>
                <li class="menu__item"><a href="#rooms" className="menu__link text">Rooms</a></li>
              </ul>
            </nav>
            <div onClick={ () => setNav(!nav) } class={ nav ? "menu-icon _active" : "menu-icon"}>
                <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header