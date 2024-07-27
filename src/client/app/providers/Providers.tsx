import { PropsWithChildren } from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { ResetCss } from '@/client/shared/styles';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CssVarsProvider>
      <ResetCss />
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};
