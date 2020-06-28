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
import HomeImage from './HomeImage';
import HalfImage from './HomeIformations';

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

function Home() {

  const [list16, setList16] = useState([]);
  const [filter16, setFilter16] = useState({name:''});
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
        toast.error("Para visualizar os whiskies é necessario fazer login!");
      } else {
        axios.get(`https://project-whiskies-backend.herokuapp.com/api/whisky/whisky-list`, config)
          .then(res => {
            if (res.status === 200) {
                setList(res.data.filter((el) => { return el.id > 7 && el.id < 14 }))
                setList16(res.data.filter((el) => { return el.age === 16 }));
            }else{

            }
          })
      }
    }

    getWhiskies();

  }, [filter]);

  const classes = useStyles();

  return (
    <Container fixed>
        <br />
        <HomeImage />
        <div>
            <h1> Mais populares </h1>
            <Divider variant="middle" />
            <p> Whiskies mais populares com idade de 16 anos.</p>
            <br/>
            <ListCard list={list16} />
            <br />
            <HalfImage />
            <h1> Listagem </h1>
            <Divider variant="middle" />
            <p> Listagem de whiskies.</p>
            <br/>
            <ListCard list={list} />
        </div>
    </Container>
  );
}

export default Home;

