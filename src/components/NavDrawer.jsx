import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router';
import { NavToggleButton } from '../styled/NavDrawer';

class NavDrawer extends Component {
  state = {
    open: false,
    width: 250,
  }

  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavToggleButton onClick={this.toggle} width={this.state.width} isOpen={this.state.open} />
        <Drawer open={this.state.open} width={this.state.width} variant="persistent">
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
