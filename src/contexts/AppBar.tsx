import React, {createContext, useState, useContext} from 'react';

type AppBarContextProps = {
  visible?: boolean;
  setVisibility?(visible: boolean): void;
};

const AppBarContext = createContext<AppBarContextProps>(
  {} as AppBarContextProps,
);

const AppBarProvider = ({children}: {children: React.ReactNode}) => {
  const [visible, setVisibility] = useState(false);

  return (
    <AppBarContext.Provider value={{visible, setVisibility}}>
      {children}
    </AppBarContext.Provider>
  );
};

const useAppBar = (): AppBarContextProps => {
  const context = useContext(AppBarContext);
  if (!context) {
    throw new Error('useAppBar must be used within an AppBarProvider');
  }

  return context;
};

export {AppBarContext, AppBarProvider, useAppBar};
