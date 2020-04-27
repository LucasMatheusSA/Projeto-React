import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
import image from '../Imagens/buchanan.jpg';
import image2 from '../Imagens/grants.jpg';
import image3 from '../Imagens/chivas.jpg';
import image4 from '../Imagens/JW_red_label.jpg';
import image5 from '../Imagens/JW_blue_label.jpg';
import image6 from '../Imagens/old_parr.jpg';
import image7 from '../Imagens/passport_scotch.jpg';
import image8 from '../Imagens/teachers.jpg';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';



const tileData = [{
    img: image,
    nome_produto: 'Buchanan',
    marca_whisky: 'James Buchanan',
    cols: 2,
},
{
    img: image2,
    nome_produto: 'Grants',
    marca_whisky: 'Grants',
    cols: 2,
},
{
    img: image3,
    nome_produto: 'Chivas',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
{
    img: image4,
    nome_produto: 'whisky',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
{
    img: image5,
    nome_produto: 'whisky',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
{
    img: image6,
    nome_produto: 'whisky',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
{
    img: image7,
    nome_produto: 'whisky',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
{
    img: image8,
    nome_produto: 'whisky',
    marca_whisky: 'marca_whisky',
    cols: 2,
},
];


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 600,
            height: 600,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

function Usuario() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={4}>
                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><h3>Favoritos</h3></ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.nome_produto} />
                        <GridListTileBar
                            title={tile.nome_produto}
                            subtitle={<span>Marca: {tile.marca_whisky}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.nome_produto}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>))}
            </GridList>
            <GridList cellHeight={250} className={classes.gridList} cols={4}>
                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><h3>Baseado no que você escolheu</h3></ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (<GridListTile key={tile.img} cols={tile.cols || 5}>
                    <img src={tile.img} alt={tile.nome_produto} />
                    <GridListTileBar
                        title={tile.nome_produto}
                        subtitle={<span>Marca:{tile.marca_whisky}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.nome_produto}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>))}
            </GridList>
        </div>
    );
}
export default Usuario;