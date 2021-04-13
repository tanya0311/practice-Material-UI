import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
// https://material-ui.com/ru/getting-started/installation/

function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
      {/* Toolbar //компонента куда вклавдывают иконки */}
        <Toolbar>  
          <IconButton edge='start' color="inherit" aria-label='menu'>
            <MenuIcon/>
            <Typography variant="h5" >Web blog</Typography>
             {/* Typography компонента где прописываем блог */}
             {/* Box компонента типа div mr={3}-margin */ }
            <Box mr={3}>
        <Button color='inherit' variant='outlined'>log in</Button>
            </Box>
            <Button color='secondary' variant='contained'>sing up</Button>

          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
