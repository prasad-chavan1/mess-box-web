import React , {useState, useEffect} from 'react'
import './home.css'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import food3 from '../../assets/food3.png'
import food4 from '../../assets/food4.png'




function Slide() {

  return (
    <div className="slide">
      <div className="slide_content">
            <img src={food1} alt="" />
      </div>
    </div>
  )
}

export default Slide
