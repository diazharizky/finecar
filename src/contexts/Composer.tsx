import React, {ReactElement} from 'react';
import type {ReactNode, FC} from 'react';

interface Props {
  providers: ReactElement[];
  children: ReactNode;
}

const Composer: FC<Props> = ({providers, children}) => (
  <>
    {providers.reduceRight((child, parent) => {
      return React.cloneElement(parent, {}, child);
    }, children)}
  </>
);

export {Composer};
