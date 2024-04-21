import React from 'react'
import './home.css'
import { useState } from 'react'
import { assets, menu_list } from '../../assets/assets'; 
function Banner() {


    const [selectCity, setSelectCity] = useState('Pune');
    const [selectLocality, setLocality] = useState('');

    const handleSelecteCity = (event) => {
        setSelectCity(event.target.value)
    };

    const handleLocality = (event) => {
        setLocality(event.target.value)
    };


    const cities = ['Pune', 'Jalgaon', 'Mumbai']
    const messes = {
        'Pune': ['Ramanand', 'MJ Road', 'Ganesh Colony'],
        'Jalgaon': ['Suprim colony', 'Akudi', 'Fule Market'],
        'Mumbai': ['Midc Road', 'Shivaji nagar', 'Pavan Home']
    }


    return (
        <div className="banner">
            <div className="banner_content">
                <div className="content">
                    <h1>Swaad anusar</h1>
                    <h1>Choose your mess</h1>
                    <br />
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione earum ad, neque ullam tempore. Vitae iste, in consectetur, praesentium suscipit architecto, temporibus similique blanditiis amet minus nemo doloremque veniam.</p>
                    <button>FIND MESS</button>
                </div>
            </div>
            <div className="mess_type">
                <div className="mess_type_title">
                    <h1>As per your choice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum quos, vitae unde iusto accusantium doloremque quod iure minus nemo voluptatum.</p>
                </div>
                <div className="mess_type_content">
                    {menu_list.map((menu, index) => (
                        <div className="type_card" key={index}>
                            <div className="mess_img">
                                <img src={menu.menu_image} alt="" />
                            </div>
                            <p>{menu.menu_name}</p>
                        </div>
                    ))}
                </div>
            <div className="hr_line"></div>
            </div>
        </div>
    )
}

export default Banner
