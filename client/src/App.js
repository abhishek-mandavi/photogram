import React from "react";
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form.js";
import logo from './images/logo.png'
import useStyles from './styles.js'

const App = () =>{
    const classes = useStyles();
    return(
        <Container maxWidth="large">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    PhotoGram
                </Typography>
                <img className={classes.image} src={logo} alt="logo" height="60"/>
            </AppBar>
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form/>
                  </Grid>
                </Grid>
              </Container>
            </Grow>
        </Container>
    );
}

export default App;