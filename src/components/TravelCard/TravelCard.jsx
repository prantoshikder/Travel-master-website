import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '15px'
    },
  });
    

const TravelCard = (props) => {
    const {PlaceTitle, PlaceDescription, image} = props.travelData;
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {PlaceTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {PlaceDescription}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/booking/${PlaceTitle}`}>
                        <button className="btn btn-warning">Booking</button>
                        </Link>
                </CardActions>
            </Card>
    );
};

export default TravelCard;