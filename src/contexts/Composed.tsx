import React from 'react';

import {Composer, StatusBarProvider} from './';

const Composed = ({children}: {children: React.ReactNode}) => {
  return (
    <Composer providers={[<StatusBarProvider children />]}>{children}</Composer>
  );
};

export {Composed};
