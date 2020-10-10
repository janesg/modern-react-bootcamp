import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import Flag from 'react-world-flags';

import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";
import { translate as trn } from "./translations";

class Navbar extends Component {
  // Gets a reference to ThemeContext if this component is wrapped
  // by a ThemeProvider - doesn't have to be a direct ancestor
  static contextType = ThemeContext;

  render() {
    // Example of nested destructuring and renaming
    const { classes, languageContext: { language: lang }} = this.props;
    const { isDarkMode, toggleTheme } = this.context;

    return (
      <div className={classes.root}>
        <AppBar position='static' color={ isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <Flag code={trn(lang, "flag")} height="30" width="32" />
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              {trn(lang, "title")}
            </Typography>
            <Switch onChange={() => toggleTheme()}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${trn(lang, "search")}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// Passes all generated JSS styles to Navbar as props 
export default withLanguageContext(withStyles(styles)(Navbar));
