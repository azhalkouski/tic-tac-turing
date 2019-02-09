import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import FloatingActionButton from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

class NavDrawer extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton color="primary" aria-label="Add">
          <MenuIcon />
        </FloatingActionButton>
        <Drawer open>
          <MenuItem>Play</MenuItem>
          <Divider />
          <MenuItem>Profile</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
