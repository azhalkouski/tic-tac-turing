import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import FloatingActionButton from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router';

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
          <Link to={'/'}>
            <MenuItem onClick={this.toggle}>Play</MenuItem>
          </Link>
          <Divider />
          <Link to={'profile'}>
            <MenuItem>Profile</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
