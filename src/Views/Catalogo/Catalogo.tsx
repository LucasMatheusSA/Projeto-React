import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Grid, Divider} from '@material-ui/core';

import Card from '../../Components/Card/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

function Catalogo() {
  const classes = useStyles();
  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={4}>
          
          <Grid item xs={12}>
            <h1> Catálogo </h1>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              multiple
              limitTags={2}
              id="combobox-sabores"
              options={Sabores}
              getOptionLabel={(option) => option.title}
              defaultValue={[Sabores[0]]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Sabor" placeholder="Sabor" />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              multiple
              limitTags={2}
              id="combobox-notas"
              options={Notas}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Notas" placeholder="Notas" />
              )}
            />
          </Grid>

        </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
      </div>
    </Container>
  );
}

export default Catalogo;

const Sabores = [
  { title: 'Amargo' },
  { title: 'Azedo' },
  { title: 'Salgado'},
  { title: 'Doce'},
];

const Notas = [
  { title: 'Amadeirado' },
  { title: 'Bla bla bla' },
  { title: 'Bla bla bla'},
  { title: 'Bla bla bla'},
];