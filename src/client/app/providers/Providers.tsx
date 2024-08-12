import { PropsWithChildren } from 'react';
import { HashRouter } from 'react-router-dom';

export const Providers = ({ children }: PropsWithChildren) => {
  return <HashRouter>{children}</HashRouter>;
};
