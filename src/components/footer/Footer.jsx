import React from 'react'
import logo from '../../assets/logo_svg.svg'
import './footer.css'
function Footer() {
  return (
    <div className="footer">
        <div className="footer_content">
            <div className="footer_logo">
                <img src={logo} alt="" /><br />
                <a href="/">queries.onlymess.in</a>
            </div>
            <div className="footer_links">
                <div className="social">
                    <h1>Socials</h1>
                    <ul>
                        <p><i class='bx bxl-instagram'></i> <a href="/"> Instagram</a></p>
                        <p><i class='bx bxl-twitter'></i> <a href="/"> Twitter</a></p>
                        <p><i class='bx bxl-linkedin'></i> <a href="/"> LinkedIn</a></p>
                    </ul>
                </div>
                <div className="pages">
                    <h1>Pages</h1>
                    <ul>
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                    <a href="/">Ablut Us</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
