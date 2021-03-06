import {LinkingOptions} from '@react-navigation/native';

const config = {
  screens: {
    NewsStack: {
      screens: {
        Home: {
          path: 'home/:value',
        },
        Details: 'details',
      },
    },

    Settings: 'settings',
  },
};

const linking: any = {
  prefixes: ['AwesomeNewsApp://app'],
  config,
};

export default linking;
