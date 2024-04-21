import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
function Why() {
  return (
    <div className="why">
      <div className="why_content">
        <h1>How it Works</h1>
        <h1>What We Serve</h1>
        <p>Product quality is our priority, and always guarantee Halal and safety unit is in your hands.</p>
        <div className="find_mess">
            <div className="img img1">
                <img src={icon1} alt="" />
            </div>
            <div className="img img2">
                <img src={icon2} alt="" />
            </div>
            <div className="img img3">
                <img src={icon3} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Why
