import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Dialog,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { Paper } from "@material-ui/core";
// https://material-ui.com/ru/getting-started/installation/
//?  video */ https://www.youtube.com/watch?v=RVSR2p6vxi0&t=170s

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
    marginBottom: theme.spacing(3),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)",
  },

  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  mainContent: {},
  cardGrid: {
    marginTop: theme.spacing(4),
  },
  card: {},
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5]; //31min video

function App() {
  const classes = useStyles(); //13.40 min
  const [value, setValue] = useState("recents"); //42min video
  const [open, setOpen]=useState(false)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
 const handClickOpen =()=>{  //45min
setOpen(true)
}
const handleClose =()=>{  
  setOpen(false)
}

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
              <Button color="inherit" variant="outlined" onClick={handClickOpen}> 
                log in
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledly='form-dialog-title'>
                <DialogTitle id='form-dialog-title' >Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see video</DialogContentText>
                  <TextField autoFocus margin="dense" id='name' label='Email adress' type='email' fullWidth />
                  <TextField autoFocus margin="dense" id='pass' label='Password' type='password' fullWidth />
                </DialogContent>
                <DialogActions >
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>Log in</Button>
                </DialogActions>
              </Dialog>
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
            <div className={classes.overlay} /> {/* 23 min video */}
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
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              omnis quia aut in maxime aspernatur sit quas. Quas a sint, eius
              ducimus non cumque in aliquam veritatis eaque odit, maxime
              deleniti amet, quaerat ipsa facere!
            </Typography>
            <div>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* 31 min video */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  ></CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" variant="h5" gutterBottom>
                      Blog Post
                    </Typography>
                    <Typography>
                      Blog Post. Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Fugiat, corrupti!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* 37min video */}
      <footer>
        <Typography variant="h5" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography variant="subtitle1" align="center" color="textSecondary" component='p' >  Blog Post </Typography>
      </footer>
    </>
  );
}

export default App;
