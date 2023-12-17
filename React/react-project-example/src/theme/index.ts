'use client';

import { createTheme } from '@mui/material/styles';
import { COLORS } from '../data/UI/colors';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    dark2?: string;
    dark3?: string;
    light2?: string;
    light3?: string;
    disabled?: string;
    hover?: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat Alternates',
    fontWeightRegular: 'regular',
    button: {
      textTransform: 'none'
    },

    h1: {
      fontFamily: 'Montserrat Alternates',
      fontSize: '36px',
      lineHeight: '16px',
      fontWeight: 400,
      color: COLORS.gray.dark5,
      padding: '6px 0'
    },
    h2: {
      fontFamily: 'Montserrat Alternates SemiBold',
      fontSize: '28px',
      lineHeight: '27px',
      fontWeight: 600,
      color: COLORS.gray.dark5
    },
    h3: {
      fontFamily: 'Montserrat Medium',
      fontSize: '16px',
      lineHeight: '27px',
      fontWeight: 500,
      color: COLORS.gray.dark5
    },
    h4: {
      fontFamily: 'Montserrat Alternates SemiBold',
      fontSize: '14px',
      lineHeight: '16px',
      color: COLORS.gray.dark5,
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Montserrat Alternates SemiBold',
      fontSize: '16px',
      lineHeight: '19.5px',
      fontWeight: 600
    },
    h6: {
      fontSize: '10px',
      color: '#000'
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontSize: '24px',
      lineHeight: '16px',
      fontWeight: 400,
      color: COLORS.gray.dark5
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#262626'
    },
    subtitle2: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: 300,
      color: COLORS.gray.light4
    },
    body2: {
      fontFamily: 'Montserrat Alternates Medium',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '17px',
      color: COLORS.black.main
    }
  },
  palette: {
    primary: {
      main: '#0038FF1A',
      dark: '#757575',
      light: '#FFFEFE',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      contrastText: '#262626'
    },
    text: {
      primary: '#595959'
    },
    grey: {
      50: '#0D4B4A',
      100: '#EDEDED'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md: 1450,
      lg: 2088,
      xl: 2089
    }
  }
});
export default theme;
