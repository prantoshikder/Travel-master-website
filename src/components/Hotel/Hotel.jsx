import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import HotelDetails from '../HotelDetails/HotelDetails';
import HotelData from './HotelData';
import map from '../image/map.jpg'
import './Hotel.css';

const Hotel = () => {
    const {TravelCard} = useParams();
    const [hotelInfo, setHotelInfo] = useState(HotelData);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="menu">
                <Header></Header>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p>252 stays Apr 13-17 3 guest</p>                        
                        <h3>Stay in {TravelCard}</h3>
                        {
                            hotelInfo.map(hotelInfo => <HotelDetails hotelInfo={hotelInfo}></HotelDetails>)
                        }
                    </div>
                    <div className="col-md-4">
                        <img src={map} className="map" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;