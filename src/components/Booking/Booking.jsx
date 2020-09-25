import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import BookingDetails from '../BookingDetails/BookingDetails';
import Header from '../Header/Header';
import TravelData from '../TravelData/TravelData';
import './Booking.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const Booking = () => {
    const {TravelCard} = useParams();
    const [travelValue, setTravelValue] = useState(TravelData);
    const [travelBooking, setTravelBooking] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const travel = travelValue.filter(tD => tD.PlaceTitle.toLowerCase() === TravelCard.toLowerCase());
        setTravelBooking(travel);
    }, [TravelCard])

    const submitHandler = () => {
        history.push(`/hotel/${TravelCard}`) 
    }

    const classes = useStyles();

    return (
        <div className="bg-banner">
            <div className="bg-overlay">
                <Header></Header>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            {
                                travelBooking.map(travelBooking => <BookingDetails travelBooking={travelBooking}></BookingDetails>)
                            }
                        </div>
                        <div className="col-lg-6">
                            <div className="destination">
                                <form onSubmit={submitHandler} action="">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Origin</label>
                                        <input type="text" placeholder="Type your origin" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Destination</label>
                                        <input type="text" className="form-control" value={TravelCard}/>
                                    </div>

                                    <div className="timeZone d-flex">
                                        <div className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                label="From"
                                                type="date"
                                                defaultValue="2017-05-09"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                        </div>
                                        <div className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                label="To"
                                                type="date"
                                                defaultValue="2017-12-09"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* <Link to={`/hotel/${PlaceTitle}`}> */}
                                        <button type="submit" className="btn btn-warning bookBtn font-weight-bold">Start Booking</button>
                                    {/* </Link> */}
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;