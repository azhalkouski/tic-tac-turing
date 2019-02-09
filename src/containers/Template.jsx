import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavDrawer from '../components/NavDrawer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#70d3ec',
    },
    accent1Color: {
      main: 'rgba(0,0,0,.87)',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class TemplateContainer extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavDrawer />
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TemplateContainer;
