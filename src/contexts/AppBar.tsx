import React, {createContext, useState, useContext, ReactNode} from 'react';

type AppBarContextProps = {
  visible?: boolean;
  setVisibility?(visible: boolean): void;
  content?: ReactNode;
  setContent?(newContent: ReactNode): void;
};

const AppBarContext = createContext<AppBarContextProps>(
  {} as AppBarContextProps,
);

const AppBarProvider = ({children}: {children: ReactNode}) => {
  const [visible, setVisibility] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  return (
    <AppBarContext.Provider
      value={{visible, setVisibility, content, setContent}}>
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
