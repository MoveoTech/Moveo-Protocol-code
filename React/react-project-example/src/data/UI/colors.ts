import { IObj } from '../types/general.typs';

export interface IColors {
  [color: string]: IObj;
}
export const COLORS: IColors = {
  gray: {
    light1: '#9A9A9A',
    light2: '#EFEFEF',
    light3: '#404040',
    light4: '#666666',
    light5: '#656565',
    light6: '#9494944D',
    light7: '#D1D1D1',
    light8: '#7A7A7A',
    light9: '#727272',
    dark1: '#464646',
    dark2: '#E9E9E9',
    dark3: '#888888',
    dark4: '#CECECE',
    dark5: '#000000',
    dark6: '#0000001A',
    dark7: '#A6A6A6',
    dark8: '#86868626'
  },
  green: {
    main: '#C6F8D1',
    secondary: '#7BEF8D'
  },
  black: {
    main: '#464646',
    light: '#525252'
  },
  yellow: {
    main: '#FFCE00',
    main2: '#FFF6CE',
    secondary: '#FCD4AF',
    dark: '#9F861E'
  },
  blue: {
    main: '#0C3DEA',
    main2: '#587DFF',
    main3: '#0038FF',
    light: '#C6EFF8',
    light2: '#E3E9FF',
    light3: '#0038FF1A',
    light4: '#99AFFF',
    light5: '#F5F7FF',
    baby: '#DBF6FF',
    dark1: '#0038FF'
  },
  red: {
    main: '#FF3939'
  },
  white: {
    main: '#FFFFFF',
    main2: '#FCFCFC'
  },
  purple: {
    main: '#EDDBFF',
    main2: '#B772FF'
  }
};
