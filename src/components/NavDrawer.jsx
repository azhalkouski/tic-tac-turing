import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import FloatingActionButton from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

class NavDrawer extends Component {
  state = {
    open: false,
  }

  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <FloatingActionButton color="primary" aria-label="Add" onClick={this.toggle}>
          <MenuIcon />
        </FloatingActionButton>
        <Drawer open={this.state.open}>
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'salmon'
            }}
          >LoginContainer</div>
          <MenuItem>Play</MenuItem>
          <Divider />
          <MenuItem>Profile</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
