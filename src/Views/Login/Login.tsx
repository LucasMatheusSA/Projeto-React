import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Container, Grid, Divider} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';

import CadastroUser from '../../Components/Login/userCadastro';
import LoginUser from '../../Components/Login/userLogin';

const userCadastro = {
  "login":"",
  "senha":"",
  "email":""
}

const userLogin = {
  "login":"",
  "senha":""
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
  }),
);

function refreshPage() {
  window.location.reload(false);
}

function Login() {

  const classes = useStyles();
  let hist = useHistory();

  function cadastrar (e){
    e.preventDefault();

    userCadastro.login = e.target.elements.login.value;
    userCadastro.senha = e.target.elements.senha.value;
    userCadastro.email = e.target.elements.email.value;

    axios.post(`https://project-whiskies-backend.herokuapp.com/api/user`,  userCadastro)
       .then(res => {
        if(res.status == 200){
          toast.success("Usuário cadastrado com sucesso!");
        }else{
          toast.error("Erro ao cadastrar usuário!");
        }
         console.log(res);
         console.log(res.data);
    })

  }

  
  function logar (e){
    e.preventDefault();

    userLogin.login = e.target.elements.inputLogin.value;
    userLogin.senha = e.target.elements.inputSenha.value;
    

    axios.post(`https://project-whiskies-backend.herokuapp.com/api/user/auth`, userLogin)
       .then(res => {

        if(res.status === 200){

          if(res.data.roles.length == 1){
            localStorage.setItem('permition',"ROLE_USER");
          }else{
            localStorage.setItem('permition',"ROLE_ADMIN");
          }

          localStorage.setItem('token',"Bearer " + res.data.token);

          toast.success("Usuário logado com sucesso!");
          hist.push("/");
          refreshPage();

        }else{
          toast.error("Erro ao logar, login ou senha incorretos!");
        }
         console.log(res);
         console.log(res.data);
    })

  }

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container>
          
          <Grid item xs={6}>
            <h1> Login </h1>
            <Divider variant="middle" />

            <LoginUser login={logar}/>
            
          </Grid>

          <Grid item xs={6}>
            <h1> Cadastro </h1>
            <Divider variant="middle" />

            <CadastroUser cadastrar={cadastrar} /> 

          </Grid>

        </Grid>
        <ToastContainer />
      </div>
    </Container>
  );
}

export default Login;
