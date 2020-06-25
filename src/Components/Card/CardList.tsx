import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Divider } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'


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

  return (
    <animated.div style={animation}>
      <div>

        {props.list.map(el =>


          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={el.imageUrl} title={el.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.name}
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    </animated.div>
  );
}