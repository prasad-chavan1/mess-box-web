import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import { Link, NavLink } from 'react-router-dom'
function Header({setShowLogin}) {

    const [menu, setMenu] = useState("home");
    const [menuActive, setMenuActive] = useState(false);
  return (
    <header>
        <div className="navbar">
            <Link to="/">
            <img src={logo} alt="" className="logo" />
            </Link>
            <ul className={"navbar_menu " + (menuActive && " menuActive")}>
                <Link to="/" className="ah_link">
                    <li onClick={()=>setMenu("home")} className={menu=="home" ? "active" : ""}>home</li>
                </Link>
                <Link to="/locateMess" className="ah_link">
                    <li onClick={()=>setMenu("locate-mess")} className={menu=="locate-mess" ? "active" : ""}>locate mess</li>
                </Link>
                <Link to="/addMess" className="ah_link">
                    <li onClick={()=>setMenu("add-mess")} className={menu=="add-mess" ? "active" : ""}>add mess</li>
                </Link>
                <Link to="/about" className="ah_link">
                    <li onClick={()=>setMenu("about-us")} className={menu=="about-us" ? "active" : ""}>about us</li>
                </Link>
                <p onClick={()=>setMenuActive(false)}><i class='bx bx-x'></i></p>
            </ul>
            <div className="navbar_right">
                <img src={searchIcon} alt="" />
                <button onClick={()=> setShowLogin(true)} className="signin">sign in</button>
                <div onClick={()=>setMenuActive(true)} className="menu_btn"><i class='bx bx-menu'></i></div>
            </div>
        </div>
    </header>
  )
}

export default Header
