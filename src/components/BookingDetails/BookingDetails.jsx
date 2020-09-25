import React from 'react';

const BookingDetails = (props) => {
    const {PlaceTitle, PlaceDescription} = props.travelBooking;
    const bookingStyle = {
        color: 'white',
    };
    return (
        <div style={bookingStyle}>
            <h1>{PlaceTitle}</h1>
            <p>{PlaceDescription}</p>
        </div>
    );
};

export default BookingDetails;