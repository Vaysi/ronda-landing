import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#bdbdbd',
    },
    primary: {
      main: '#ff5821',
      light: '#ff5821',
    },
    success: {
      main: '#43a047',
      light: '#43a047'
    },
  },
  overrides: {
    MuiButton: {
      endIcon: {
        marginRight: 8,
        marginLeft: -4
      },
      label:{
        flexDirection: 'inherit'
      }
    }
  },
  direction: 'rtl',
  typography: {
    fontFamily: ['Vazir FD'].join(','),
    htmlFontSize:  17.5,
  },
});

export default theme;
