import * as React from 'react';
import axios from 'axios';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Container, Grid, Divider } from '@material-ui/core';

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

 class serverWhiskyList extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      "login":"",
      "senha":"",
      "email":""
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = this.state;

    axios.post(`https://project-whiskies-backend.herokuapp.com/api/user`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {

    const classes = useStyles();

    return (
        <h1>ola</h1>
    )
  }
}

export default serverWhiskyList;
