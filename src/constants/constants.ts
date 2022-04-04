import {ThemeColors} from '../types';

export const enum ThemeMode {
  dark = 0,
  light = 1,
}

export const darkThemeColors: ThemeColors = {
  backgroundColor: '#121212',
  textColor: 'yellow',
  tabBarBackground: 'rgb(241,241,241)',
  primaryColor: 'gray',
  secondaryColor: '#121212',
  secondaryTextColor: 'yellow',
};

export const lightThemeColors: ThemeColors = {
  backgroundColor: 'rgb(241,241,241)',
  textColor: 'white',
  tabBarBackground: 'rgb(241,241,241)',
  primaryColor: 'rgb(241,241,241)',
  secondaryColor: 'white',
  secondaryTextColor: 'black',
};
export const Themes = [darkThemeColors, lightThemeColors];

export enum Language {
  english = 'en',
  Deutsch = 'de',
}

export const colors = {
  green: '#33A850',
  lightGrey: '#d3d3d3',
  darkGrey: '#323233',
  yellow: '#f5dd4b',
  iosDarkBackgroundColor: '#3e3e3e',
  black: 'black',
  white: 'white',
  primaryColor: 'rgb(241,241,241)',
  mediumGrey: 'rgb(92, 92, 92)',
};

export const countries = [
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'rs',
  'ru',
  'sa',
  'tw',
  'ua',
  'us',
];
