import React from 'react';
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

import './HeaderStyle.css'

import Search from '../Search/SearchComponent';

function Header() {
  return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" classes={{root:'brand-logo'}}>H</Typography>
          <Hidden mdDown={true}>
            <Typography variant="h6" classes={{root:'brand-name'}}>
              Hacker News Clone
            </Typography>
          </Hidden>
          <Search/>
        </Toolbar>
      </AppBar>
  )
}

export default Header;