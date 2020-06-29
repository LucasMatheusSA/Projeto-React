import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Grid, Divider } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { toast } from 'react-toastify';
import axios from 'axios';
import ListCard from '../../Components/Card/CardList';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
  }),
);


function Catalogo() {

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState({name:''});

  useEffect(() => {

    const getWhiskies = async () => {
      let token = localStorage.getItem('token');

      let config = {
        headers: {
          'Authorization': token
        }
      };

      if (token == null) {
        toast.error("É necessario fazer login!");
        return null;
      } else {
        axios.get(`https://project-whiskies-backend.herokuapp.com/api/whisky/whisky-list`, config)
          .then(res => {
            if (res.status == 403) {
              toast.error("Erro na request!");
            }

            console.log(res);
            console.log(res.data);
            if (filter.name !== '') {
              setList(res.data.filter((el) => { return el.name.match(new RegExp(`${filter.name}`)); }))
            } else {
              setList(res.data);
            }
          })
      }
    }

    getWhiskies();

  }, [filter]);

  function handleChange(e) {
    console.log(e.target.value);
    setFilter({ name: e.target.value });
  }

  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={4}>

          <Grid item xs={12}>
            <h1> Catálogo </h1>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={1}>
            <IconButton aria-label="buscar" className={classes.margin}>
              <SearchIcon fontSize="large"/>
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">Nome</InputLabel>
              <Input id="id-nome-categoria" name="inputNome" onChange={handleChange} />
            </FormControl>
          </Grid>


        </Grid>

        <ListCard list={list} />

      </div>
    </Container>
  );
}

export default Catalogo;

