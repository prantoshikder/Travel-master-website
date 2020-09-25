import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
import TravelData from '../TravelData/TravelData'
import TravelCard from '../TravelCard/TravelCard'

const Home = () => {
    const [travelData, setTravelData] = useState(TravelData);
    return (
        <div className="bg-banner">
            <div className="bg-overlay">
                <Header></Header>
                <div className="travelCard">
                    {
                        travelData.map(travelData => <TravelCard travelData={travelData}></TravelCard>)
                    }
                </div> 
            </div>            
        </div>
    );
};

export default Home;