import React from 'react';
import '../../App.css';
import { Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Parallax } from "react-parallax";
import Img from '../../Images/Home/halfImage.jpg';

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


function HomeIformations() {

  const classes = useStyles();

  return (
    <Parallax bgImage={Img} strength={200}>
      <div style={{ height: 200 }}>
        <div style={{ position: "absolute", right: 50 }}>

          <h3 className={classes.title}> A maior variedade, detalhamento completo e profissional para a melhor experiência.</h3>
          <h3 className={classes.title}> Idade, categoria, notas, região e muito mais.</h3>
        </div>
      </div>
    </Parallax>
  );
}

export default HomeIformations;
