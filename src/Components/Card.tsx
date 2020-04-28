import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./Images/bottles/201205037_13360295893945_original.png"
          title="Whisky"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Whisky
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Uma mistura de whiskies envelhecidos em maior parte com carvalho americano incluindo barris de bourbon. Uma mistura deliciosamente suave com uma camada doce de baunilha e caramelo. É a combinação de habilidades do nosso mestre da madeira e nosso mestre da mistura para criar o equilíbrio perfeito entre suavidade e doçura.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}