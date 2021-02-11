import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Tempo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    // <Box width="100%">
    //   <Box
    //     display="flex"
    //     flexDirection="row"
    //     width="100%"
    //     height="200px"
    //     alignItems="center"
    //     justifyContent="space-between"
    //     bgcolor="rebeccapurple"
    //   >
    //     <h1>Tempo</h1>
    //     <Box>
    //       <Button variant="contained" color="primary" size="large">
    //         Home
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
  );
}
