// import * as React from 'react';
// import axios from 'axios';

// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import { Container, Grid, Divider } from '@material-ui/core';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > * + *': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     margin: {
//         margin: theme.spacing(1),
//     },
//   }),
// );

//  class ServerCadastroUser extends React.Component {

//   constructor(props){
//     super(props)

//     this.state = {
//       "login":"",
//       "senha":"",
//       "email":""
//     }
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const user = this.state;

//     axios.post(`https://project-whiskies-backend.herokuapp.com/api/user`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {

//     const classes = useStyles();

//     return (

//             <Grid container spacing={3}>
//               <form onSubmit={this.handleSubmit}>

//                 <Grid item xs={1}>
//                 </Grid>
//                 <Grid item xs={10}>
//                     <FormControl fullWidth className={classes.margin}>
//                         <InputLabel htmlFor="standard-adornment-amount">Login</InputLabel>
//                         <Input id="id-login-cadastro" name="login" value="{this.state.login}" onChange={this.handleChange}/>
//                     </FormControl>
//                 </Grid>
//                 <Grid item xs={1}>
//                 </Grid>

//                 <Grid item xs={1}>
//                 </Grid>
//                 <Grid item xs={10}>
//                     <FormControl fullWidth className={classes.margin}>
//                         <InputLabel htmlFor="standard-adornment-amount">Senha</InputLabel>
//                         <Input id="id-senha-cadastro" type="password" name="senha" value="{this.state.senha}" onChange={this.handleChange}/>
//                     </FormControl>
//                 </Grid>
//                 <Grid item xs={1}>
//                 </Grid>

//                 <Grid item xs={1}>
//                 </Grid>
//                 <Grid item xs={10}>
//                     <FormControl fullWidth className={classes.margin}>
//                         <InputLabel htmlFor="standard-adornment-amount">E-mail</InputLabel>
//                         <Input id="id-email-cadastro" name="email" value="{this.state.email}" onChange={this.handleChange}/>
//                     </FormControl>
//                 </Grid>
//                 <Grid item xs={1}>
//                 </Grid>

//                 <Grid item xs={1}>
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
//                 </Grid>
//                 <Grid item xs={8}>
//                 </Grid>
//               </form>

//             </Grid>
//     )
//   }
// }

// export default ServerCadastroUser;


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



const ServerCadastroUser = (props) => {

  const classes = useStyles();

  return (

    <form onSubmit={props.cadastro}>
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
    </form>
  )
}


export default ServerCadastroUser;