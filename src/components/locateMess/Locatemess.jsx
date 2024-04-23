import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoSvg from '../../assets/logo_svg.svg';
import './locatemess.css'
function Locatemess() {
  return (
    <>
      <div className="locateMess_content">
        <p className="path">
          <Link to="/" className="a_link">Home / </Link><Link to="/locateMess" className="a_link active">Locate Mess</Link>
        </p>
        <div className="mess_cards">
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="mess_img">
              <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=3840&q=75" alt="" />
            </div>
            <div className="mess_info">
              <div className="mess_name_open">
                <h1>Tai Mess</h1>
                <p><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jklwfs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg> Open</p>
              </div>
              <p className="mess_area">Ramanand Nagar</p>
              <p className="mess_rate">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ir2x1k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

                    <p className="review">(No Reviews Yet)</p>
              </p>
              <div className="mess_time">
                <div className="day time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h7x2xc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path></svg>

                  <p className="">09:00 : 12:00</p>
                </div>
                <div className="neight time">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1f8zwqt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DarkModeIcon"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"></path></svg>
                  <p className="">08:05 : 09:30</p>
                </div>
              </div>
              <div className="mess_more">
                <div className="mess_price">
                  <p>Starts From</p>
                  <h1>₹ 2500/mo</h1>
                </div>
                <div className="mess_link">
                  <Link to="/" className="btn">More Info</Link>
                  <Link to="/" className="btn2">Order Enquiry</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Locatemess
