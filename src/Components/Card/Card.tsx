import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography,Divider} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= '../../Images/Home/whisky_wallpaper.jpg'
          title="Whisky"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Whisky
          </Typography>
          <Divider variant="middle" />
          <Typography variant="body2" color="textSecondary" component="p">
            Uma mistura de whiskies envelhecidos em maior parte com carvalho americano incluindo barris de bourbon. Uma mistura deliciosamente suave com uma camada doce de baunilha e caramelo. É a combinação de habilidades do nosso mestre da madeira e nosso mestre da mistura para criar o equilíbrio perfeito entre suavidade e doçura.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}