import React, {createContext, useState, useContext} from 'react';
import type {StatusBarStyle} from 'react-native';

type StatusBarContextProps = {
  bgColor?: string;
  style?: StatusBarStyle;
  setBgColor(newBgColor: string): void;
  setStyle(newStyle: StatusBarStyle): void;
};

const StatusBarContext = createContext<StatusBarContextProps>(
  {} as StatusBarContextProps,
);

const StatusBarProvider = ({
  children,
  defaultBgColor,
  defaultStyle,
}: {
  children: React.ReactNode;
  defaultBgColor: string;
  defaultStyle: StatusBarStyle;
}) => {
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [style, setStyle] = useState(defaultStyle);

  return (
    <StatusBarContext.Provider value={{setBgColor, setStyle, bgColor, style}}>
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
