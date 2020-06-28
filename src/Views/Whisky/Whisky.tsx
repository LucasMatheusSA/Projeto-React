import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Grid, Container } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import { toast } from 'react-toastify';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

function Profile() {

  const { id } = useParams();

  const [data, setData] = useState({ age: 0, alcohol: 0, category: '', chillFiltered: false, color: '', description: '', distillery: '', distilleryImageUrl: '', finish: '', flavors: '', id: 0, imageUrl: '', nema: '', nose: '', palate: '', region: '', singleCask: false, style: '', tasteNote: '', type: '', uuid: '', vol: '' });

  useEffect(() => {

    const getWhisky = async () => {
      let token = localStorage.getItem('token');

      let config = {
        headers: {
          'Authorization': token
        }
      };

      if (token == null) {
        toast.error("Para visualizar os whiskies é necessario fazer login!");
      } else {
        axios.get(`https://project-whiskies-backend.herokuapp.com/api/whisky/get-whisky/` + id, config)
          .then(res => {
            if (res.status === 200) {
              setData(res.data);
            } else {

            }
          })
      }
    }

    getWhisky();

  }, []);

  return data;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Whisky() {

  const data = Profile();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      {/* style={{ maxWidth: 300, maxHeight: 60 }} */}
      <br />
      <br />
      <img src={data.distilleryImageUrl} alt="Destilaria" style={{ maxWidth: 500, maxHeight: 100 }} />
      <br />
      <br />
      <Divider variant="middle" />
      <br />
      <Grid container spacing={1}>


        <Grid item xs={8}>
          <br /><br />
          <div className="classes.root">
            <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs" className={classes.tabs} >
              <Tab label="Descrição" {...a11yProps(0)} />
              <Tab label="Informações principais" {...a11yProps(1)} />
              <Tab label="Detalhes" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Typography variant="body2" color="textSecondary" component="p" >
                {data.description}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="body2" color="textSecondary" component="p" >
                Categoria: {data.category}    /   Volume: {data.vol}    /   Alcool: {data.alcohol}%   /   Região: {data.region}
                <br/><br/> Sabores: {data.flavors}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="body2" >
                Cor: {data.color} <br/> Acabamento: {data.finish} <br/> Olfato: {data.nose} <br/> Palato: {data.palate} <br/>
                Estilo: {data.style} <br/> 
              </Typography>
            </TabPanel>
          </div>

        </Grid>

        <Grid item xs={4}>
          <img src={data.imageUrl} alt="Whisky" style={{ maxWidth: 200, maxHeight: 300 }} />
        </Grid>

      </Grid>
      
    </Container>
    
  );
}

