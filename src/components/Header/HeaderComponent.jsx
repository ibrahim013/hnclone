import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '../Search/SearchComponent';

function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Hacker News Clone
          </Typography>
          <Search/>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;