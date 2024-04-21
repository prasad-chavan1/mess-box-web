import React, { useState } from 'react'
import './home.css'
function Find() {

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
        <div className="find">
            <div className="find_content">
                <h1>Choose your mess,</h1>
                <h1>&emsp;&emsp; <span>Swaad anusar!</span></h1>
                <p>Effortlessly explore nearby mess options, choose the perfect mess that suits your taste preferences seamlessly!</p>


                <div className="input_places">

                    <select value={selectCity} onChange={handleSelecteCity}>
                        <option value="">Choose City</option>
                        {
                            cities.map(city => {
                                return <option value={city}>{city}</option>
                            })
                        }
                    </select>
                    { selectCity &&  <select value={selectLocality} onChange={handleLocality}>
                        <option value="">Choose Locality</option>
                        {
                            messes[selectCity].map(locality => {
                                return <option value={locality}>{locality}</option>
                            })
                        }
                    </select>}

                    <a href="" className="btn">Find</a>

                </div>

            </div>
        </div>
    )
}

export default Find
