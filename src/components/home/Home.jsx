import React from 'react'
import Find from './Find'
import Slide from './Slide'
import Why from './Why'
import Testimonials from './Testimonials'
import Banner from './Banner'
function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner />
      </div>
        <div className="home_content">
            {/* <Find />
            <Slide /> */}
        </div>
        <div className="home_why">
          <Why />
          <Testimonials />
        </div>
    </div>
  )
}

export default Home
