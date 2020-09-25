import React from 'react';
import'./HotelDetails.css'

const HotelDetails = (props) => {
    const {name, image, price} = props.hotelInfo;
    
    return (
        <div className="container">
            <div className="detail d-flex">
                <div className="imgPart">
                    <img src={image}/> 
                </div>
                <div className="detailPart">
                    <h6>{name}</h6>
                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>                
                    <p>Wif Air conditioning Kitchen</p>                
                    <p>Cancellation flexibility available</p>                
                    <h6>${price}/<span>Night</span></h6>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;