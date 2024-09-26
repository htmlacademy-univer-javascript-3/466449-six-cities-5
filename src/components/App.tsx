import React from 'react';
import { MainScreen } from '../pages/MainScreen.tsx';
import { MainScreenProps } from '../props/MainScreenProps.ts';

export function App({placeCount}: MainScreenProps): React.JSX.Element {
  return (
    <MainScreen placeCount={placeCount}/>
  );
}
