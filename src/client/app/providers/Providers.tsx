import { PropsWithChildren } from 'react';
import { CssVarsProvider } from '@mui/joy';

export const Providers = ({ children }: PropsWithChildren) => {
  return <CssVarsProvider>{children}</CssVarsProvider>;
};
