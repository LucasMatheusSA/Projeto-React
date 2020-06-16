import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Container, Grid, Divider} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    margin: {
        margin: theme.spacing(1),
    },
  }),
);

function Login() {

  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container>
          
          <Grid item xs={6}>
            <h1> Login </h1>
            <Divider variant="middle" />

            <Grid container spacing={3}>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Login</InputLabel>
                        <Input id="id-login-cadastro"/>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Senha</InputLabel>
                        <Input id="id-senha-cadastro" type="password"/>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={4}>
                    <Button variant="contained" color="primary">Logar</Button>
                </Grid>
                <Grid item xs={8}>
                </Grid>


            </Grid>
            
          </Grid>

          <Grid item xs={6}>
            <h1> Cadastro </h1>
            <Divider variant="middle" />

            {/* <serverCadastroUser /> */}

            <Grid container spacing={3}>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Login</InputLabel>
                        <Input id="id-login-cadastro" name="login" />
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Senha</InputLabel>
                        <Input id="id-senha-cadastro" type="password" name="senha" />
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">E-mail</InputLabel>
                        <Input id="id-email-cadastro" name="email" />
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                </Grid>
                <Grid item xs={8}>
                </Grid>

            </Grid>

          </Grid>

        </Grid>
      </div>
    </Container>
  );
}

export default Login;
