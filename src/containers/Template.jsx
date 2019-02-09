import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavDrawer from '../components/NavDrawer';
import { StyledHeader, Main } from '../styled/StyledTemplate';

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
          <StyledHeader>Tic Tac Turing</StyledHeader>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TemplateContainer;
