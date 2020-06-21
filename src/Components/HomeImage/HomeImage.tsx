import React from 'react';
import '../../App.css';
import { Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Parallax } from "react-parallax";
import homepageImg from '../../Images/Home/whisky_wallpaper.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxHeight: '64px',
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: '#FFFFFF',
            fontFamily: [
                'Malaga',
            ].join(','),
        },
    }),
);


function Home() {

  const classes = useStyles();

  return (
    <Parallax bgImage={homepageImg} strength={500}>
      <div style={{ height: 500 }}>
        <div style={{ position: "absolute", bottom: 20, left: 50 }}>

          <h1 className={classes.title}> Whisky's </h1>
          <Divider variant="middle" />
          <h4 className={classes.title}> Catálogo de whikies, melhor sabor e qualidade. </h4>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;
