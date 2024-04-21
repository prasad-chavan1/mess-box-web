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
            <img src={logo} alt="" className="logo" />
            <ul className={"navbar_menu " + (menuActive && " menuActive")}>
                <li onClick={()=>setMenu("home")} className={menu=="home" ? "active" : ""}>home</li>
                <li onClick={()=>setMenu("locate-mess")} className={menu=="locate-mess" ? "active" : ""}>locate mess</li>
                <li onClick={()=>setMenu("add-mess")} className={menu=="add-mess" ? "active" : ""}>add mess</li>
                <li onClick={()=>setMenu("about-us")} className={menu=="about-us" ? "active" : ""}>about us</li>
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
