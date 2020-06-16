import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Grid, Divider } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Card from '../../Components/Card/Card';

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
    table: {
      minWidth: 650,
    },
  }),
);


function createData(name: string, email: string) {
  return { name, email };
}

const rows = [
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
  createData('User 1', "teste@teste.com"),
];

function User() {
  const classes = useStyles();
  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container >

          <Grid item xs={12}>
            <h1> Configurações de usuário </h1>
            <Divider variant="middle" />
            <Grid container spacing={4}>
              <Grid item xs={6}>

                <h2> Cadastro de usuário </h2>
                <Divider variant="middle" />

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
              <Grid item xs={6}>

                <h2> Listagem de usuários </h2>
                <Divider variant="middle" />

                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell >{row.name}</TableCell>
                          <TableCell >{row.email}</TableCell>
                          <TableCell >
                            <IconButton aria-label="delete" className={classes.margin}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid container spacing={6}>


          <Grid item xs={12}>
            <h1> Configurações de Whisky </h1>
            <Divider variant="middle" />
            <Grid container spacing={4}>



            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default User;
