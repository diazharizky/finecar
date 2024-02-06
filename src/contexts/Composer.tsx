import React from 'react';
import type {ReactNode, FC} from 'react';

interface Props {
  providers: React.ReactElement[];
  children: ReactNode;
}

const Composer: FC<Props> = ({providers, children}) => (
  <>
    {providers.reduceRight(
      (child, parent) => React.cloneElement(parent, {}, child),
      children,
    )}
  </>
);

export {Composer};
