import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import { toast } from 'react-toastify';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});


export default function CardList(props) {

  const classes = useStyles();

  const animation = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-40px, -40px)" }
  });

  if (props.list === undefined) {
    return <CircularProgress />
  }

  return (

    <animated.div style={animation}>
      <Grid container spacing={10}>


        {props.list?.map(el =>
          <Grid item xs={4}>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={el.imageUrl} title={el.name} />
                <CardContent>
                  <img src={el.distilleryImageUrl} alt="Destilaria" style={{maxWidth: 300 , maxHeight: 60}} />
                  <br/>
                  <br/>
                  <Divider variant="middle" />
                  <br/>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Categoria: {el.category}    /   Volume: {el.vol}    /   Alcool: {el.alcohol}%
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
            </Card>


          </Grid>
        )}

      </Grid>
    </animated.div>
  )

}