import React, {createContext, useState, useContext} from 'react';
import type {StatusBarStyle} from 'react-native';

import {lightColor} from '../consts/style';

type StatusBarContextProps = {
  bgColor?: string;
  style?: StatusBarStyle;
  setBgColor?(newCol: string): void;
  setStyle?(newStyle: StatusBarStyle): void;
};

const StatusBarContext = createContext<StatusBarContextProps>(
  {} as StatusBarContextProps,
);

const StatusBarProvider = ({children}: {children: React.ReactNode}) => {
  const [bgColor, setBgColor] = useState<string>(lightColor);
  const [style, setStyle] = useState<StatusBarStyle>('dark-content');

  return (
    <StatusBarContext.Provider value={{bgColor, style, setBgColor, setStyle}}>
      {children}
    </StatusBarContext.Provider>
  );
};

const useStatusBar = (): StatusBarContextProps => {
  const context = useContext(StatusBarContext);
  if (!context) {
    throw new Error('useStatusBar must be used within an StatusBarProvider');
  }

  return context;
};

export {StatusBarContext, StatusBarProvider, useStatusBar};
