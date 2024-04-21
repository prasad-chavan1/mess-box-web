import React from 'react'
import './about.css'
import { Link, NavLink } from 'react-router-dom'
import logoSvg from '../../assets/redBgLogo.svg';
import boy from '../../assets/boy.png'
import Why from '../home/Why';
function About () {
  return (
    <div className="about">
      <div className="navbar_srtip">
        <p>Introducing <span>OnlyMess Treats</span>, treat yourself with delighful recipes</p>
      </div>
      <div className="navbar">
        <Link to="/" className="a_link"><img src={logoSvg} alt="" /></Link>
        <div className="navbar_items">
          <ul>
            <NavLink to="/" className="ab_link">Home</NavLink>
            <NavLink to="/about" className="ab_link">About Us</NavLink>
          </ul>
          <Link to="/" className="btn">Login</Link>

        </div>
      </div>
      <div className="about_content">
        <div className="about_img">
          <img src={boy} alt="" />
        </div>
        <div className="about_info">
          <span>About</span>
          <h1>MessWaala</h1>
          <p>MESSWAALA is an online food delivery app which provides 3 meals of the day, viz, breakfast, Lunch and Dinner to customers daily throughout the month with a pre-paid subscription plan.</p><br />
          <p>MESSWAALA in coordination with the local Government authorities, will be taking part of the State Government’s Community Kitchen’ scheme.</p>
        </div>
      </div>
      <Why />
    </div>
  )
}

export default About;
