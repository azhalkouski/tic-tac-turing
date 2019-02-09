import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
          <header>
            <h1>Tic Tac Turing</h1>
            <Button variant="contained" color="primary">Button</Button>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TemplateContainer;
