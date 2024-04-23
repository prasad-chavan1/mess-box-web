import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_title">
          <div className="hr_line2"></div>
          <img src={logo} alt="" />
          <div className="hr_line2"></div>
        </div>
        <div className="footer_info">
          <div className="footer_links">
            <ul>
              <li><Link to="/" className="af_link">Privacy policy</Link></li>
              <li><Link to="/" className="af_link">Terms & condition</Link></li>
              <li><Link to="/" className="af_link">About</Link></li>  
            </ul>
          </div>
          <div className="footer_social">
            <Link to="/" target='_blank'><i class='bx bxl-twitter'></i></Link>
            <Link to="/" target='_blank'><i class='bx bxl-instagram'></i></Link>
            <Link to="/" target='_blank'><i class='bx bxl-linkedin'></i></Link>
          </div>
          <div className="footer_links">
            <ul>
              <li><Link to="/" className="af_link">Privacy policy</Link></li>
              <li><Link to="/" className="af_link">Terms & condition</Link></li>
              <li><Link to="/" className="af_link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
