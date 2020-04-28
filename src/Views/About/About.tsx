import React from 'react';

import { AppBar, Toolbar, Typography, Container, Divider } from "@material-ui/core";
import "./About.css";

function About() {
  return (
    <AppBar className="footer" position="static" color="default">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="subtitle1" color="inherit">
                Colaboradores: Lucas Matheus, Victor Viana, Rodrigo França.
              </Typography>
              <Divider variant="middle" />
              <Typography variant="body1" color="inherit">
                &copy; 2020 Cadeira React
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default About;
