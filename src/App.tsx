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
  Paper,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
// import { Paper } from "@material-ui/core";
// https://material-ui.com/ru/getting-started/installation/
//? */ https://www.youtube.com/watch?v=RVSR2p6vxi0&t=170s

//! theme: объект темы, ранее введенный в контекст. 13 min video
//? https://material-ui.com/ru/styles/advanced/#css-injection-order

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
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay:{
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundOverlay:'rgba(0,0,0,.3)'
  },

  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(10),
  },
}));

function App() {
  const classes = useStyles(); //13.40 min

  return (
    <>
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
      <main>
        {/* <Paper> ведет себя как лист бумаги, мы будем использовать как подложку под img 
      https://material-ui.com/ru/components/paper/#paper
      */}
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            {/* Container fixed - фиксирует содержимое по горизонтали; или maxWidth='размер экрана' (sm, lg, and other)*/}
            <div className={classes.overlay}/>  {/* 23 min video */}
            <Grid container>
              <Grid item md={6}></Grid>
              {/* по размеру экрана и  md={6} - количество колонок которое он займет */}

              <div className={classes.mainFeaturesPostContent}>
                {/* color='inherit' те наследуется,  gutterBottom - нижний отступ*/}
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Web blog
                </Typography>
                <Typography component="h5" color="inherit" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  voluptatum tempore sequi est deserunt facilis assumenda velit
                  et reiciendis ea!
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn more
                </Button>
              </div>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
}

export default App;
