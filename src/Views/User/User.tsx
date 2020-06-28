import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Grid, Divider } from '@material-ui/core';
import { toast } from 'react-toastify';
import axios from 'axios';

import CadastroUser from '../../Components/Login/userCadastro'
import ListUsers from '../../Components/Lists/ListUser';
import ListWhisky from '../../Components/Lists/ListWhisky';
import CadastroWhisky from '../../Components/Login/whiskyCadastro';

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


const userCadastro = {
  "login": "",
  "senha": "",
  "email": ""
}

const whiskyCadastro = {
  "age": 0,
  "alcohol": 0,
  "category": "",
  "chillFiltered": false,
  "color": "",
  "description": "",
  "distillery": "",
  "distilleryImageUrl": "",
  "finish": "",
  "flavors": "",
  "imageUrl": "",
  "name": "",
  "nose": "",
  "palate": "",
  "region": "",
  "singleCask": false,
  "style": "",
  "tasteNotes": "",
  "type": "",
  "vol": ""
}

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


function refreshPage() {
  window.location.reload(false);
}


function User() {

  const classes = useStyles();

  function cadastrar(e) {
    e.preventDefault();

    userCadastro.login = e.target.elements.login.value;
    userCadastro.senha = e.target.elements.senha.value;
    userCadastro.email = e.target.elements.email.value;

    axios.post(`https://project-whiskies-backend.herokuapp.com/api/user`, userCadastro)
      .then(res => {
        if (res.status == 200) {
          toast.success("Usuário cadastrado com sucesso!");
          refreshPage();
        } else {
          toast.error("Erro ao cadastrar usuário!");
        }
        console.log(res);
        console.log(res.data);
      })

  }

  function cadastrarW(e) {
    e.preventDefault();

    let token = localStorage.getItem('token');

    let config = {
      headers: {
        'Authorization': token
      }
    };

    whiskyCadastro.age = e.target.elements.age.value;
    whiskyCadastro.alcohol = e.target.elements.alcohol.value;
    whiskyCadastro.category = e.target.elements.category.value;
    whiskyCadastro.description = e.target.elements.description.value;
    whiskyCadastro.distillery = e.target.elements.distillery.value;
    whiskyCadastro.distilleryImageUrl = e.target.elements.distilleryImageUrl.value;
    whiskyCadastro.imageUrl = e.target.elements.imageUrl.value;
    whiskyCadastro.name = e.target.elements.name.value;
    whiskyCadastro.region = e.target.elements.region.value;
    whiskyCadastro.tasteNotes = e.target.elements.tasteNotes.value;
    whiskyCadastro.vol = e.target.elements.vol.value;

    if(token === undefined){
      
    }

    axios.post(`https://project-whiskies-backend.herokuapp.com/api/whisky/insert`, whiskyCadastro, config)
      .then(res => {
        if (res.status == 200) {
          toast.success("Usuário cadastrado com sucesso!");
          refreshPage();
        } else {
          toast.error("Erro ao cadastrar usuário!");
        }
        console.log(res);
        console.log(res.data);
      })

  }

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={2}>

          <Grid item xs={12}>

            <h1> Configurações de usuário </h1>
            <Divider variant="middle" />

            <br />

            <Grid container spacing={1}>

              <Grid item xs={6}>

                <h2> Cadastro de usuário </h2>
                <Divider variant="middle" />

                <CadastroUser cadastrar={cadastrar} />

              </Grid>

              <Grid item xs={6}>

                <h2> Listagem de usuários </h2>
                <Divider variant="middle" />

                <ListUsers />

              </Grid>

            </Grid>

          </Grid>

          <br /><br />
          <br /><br />

          <Grid item xs={12}>

            <h1> Configurações de Whisky </h1>
            <Divider variant="middle" />

            <br />

            <Grid container spacing={1}>

              <Grid item xs={6}>

                <h2> Cadastro de whisky </h2>
                <Divider variant="middle" />

                <CadastroWhisky cadastrar={cadastrarW} />

              </Grid>

              <Grid item xs={6}>

                <h2> Listagem de whisky </h2>
                <Divider variant="middle" />

                <ListWhisky />

              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default User;
