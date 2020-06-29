
import * as React from 'react';
import axios from 'axios';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Container, Grid, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



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
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    }),
);



const ServerCadastroUser = (props) => {

    const classes = useStyles();

    return (

        <form onSubmit={props.cadastrar}>
            <Grid container spacing={4}>

                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Idade</InputLabel>
                        <Input id="id-age-cadastro" name="age" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Porcentagem alcool</InputLabel>
                        <Input id="id-alcohol-cadastro" name="alcohol" />
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Destilaria</InputLabel>
                        <Input id="id-disillery-cadastro" name="disillery" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Nome</InputLabel>
                        <Input id="id-name-cadastro" name="name" />
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Região</InputLabel>
                        <Input id="id-region-cadastro" name="region" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Volume</InputLabel>
                        <Input id="id-vol-cadastro" name="vol" />
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Categoria</InputLabel>
                        <Input id="id-category-cadastro" name="category" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Notas</InputLabel>
                        <Input id="id-tasteNotes-cadastro" name="tasteNotes" />
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Url titulo</InputLabel>
                        <Input id="id-distilleryImageUrl-cadastro" name="distilleryImageUrl" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Url imagem</InputLabel>
                        <Input id="id-mageUrl-cadastro" name="imageUrl" />
                    </FormControl>
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        id="outlined-full-width"
                        name="description"
                        label="Descrição"
                        style={{ margin: 8 }}
                        placeholder="Digite a descrição"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
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