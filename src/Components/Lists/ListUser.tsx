
import * as React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import { toast } from 'react-toastify';
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
        demo: {
            position: 'relative',
            overflow: 'auto',
            width: '100%',
            maxHeight: 400,
            backgroundColor: theme.palette.background.paper
        },
    }),
);

function refreshPage() {
    window.location.reload(false);
  }

function deletar(id) {
    let token = localStorage.getItem('token');

    let config = {
        headers: {
            'Authorization': token
        }
    };

    if (token === null) {
        toast.error("Para visualizar os whiskies é necessario fazer login!");
    } else {
        axios.put(`https://project-whiskies-backend.herokuapp.com/api/user/delete/` + id, config)
            .then(res => {
                if (res.status === 200) {
                    refreshPage();
                } else {
                }
            })
    }
}

const ListUser = () => {

    const classes = useStyles();

    const [list, setList] = React.useState([{ login: '', senha: '', email: '' }]);

    React.useEffect(() => {

        const getUsers = async () => {
            let token = localStorage.getItem('token');

            let config = {
                headers: {
                    'Authorization': token
                }
            };

            if (token == null) {
                toast.error("É necessario fazer login!");
            } else {
                axios.get(`https://project-whiskies-backend.herokuapp.com/api/user/list-all`, config)
                    .then(res => {
                        if (res.status === 200) {
                            console.log(res.data);
                            setList(res.data);
                        } else {
                            toast.error("Erro na request!");
                        }
                    })
            }
        }

        getUsers();

    }, []);

    return (

        <div className={classes.demo}>
            <List>
                {list?.map(el =>
                    <ListItem>

                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={el.login} secondary={el.email} />

                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>

                    </ListItem>
                )}
            </List>
        </div>
    )
}


export default ListUser;