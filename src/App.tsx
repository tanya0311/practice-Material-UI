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
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
// https://material-ui.com/ru/getting-started/installation/
//? */ https://www.youtube.com/watch?v=RVSR2p6vxi0&t=170s

//! theme: объект темы, ранее введенный в контекст. 13 min video
const useStyles = makeStyles((theme: any) => ({
  //<= возвращает объект
  root: {
    flexGrow: 1, // определяет увеличение ширины флекс-элемента относительно ширины других флекс элементов внутри контейнера
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles(); //13.40 min

  return (
    <AppBar position="fixed">
      <Container fixed>
        {/* Toolbar //компонента куда вклавдывают иконки */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Web blog
          </Typography>
          {/* Typography компонента где прописываем блог */}
          {/* Box компонента типа div mr={3}-margin */}
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              log in
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            sing up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
