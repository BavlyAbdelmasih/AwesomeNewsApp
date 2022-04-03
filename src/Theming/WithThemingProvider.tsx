import React from 'react';
import {ThemeContextProvider} from './ThemeContextProvider';

export default function (WrappedComponent: any) {
  return function (props: any) {
    return (
      <ThemeContextProvider>
        <WrappedComponent {...props} />
      </ThemeContextProvider>
    );
  };
}
