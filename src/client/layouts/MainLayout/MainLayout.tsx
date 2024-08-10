import { Button } from '@/client/shared/ui/button';
import { PropsWithChildren } from 'react';

export type MainLayoutProps = PropsWithChildren;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Button size='default'>123</Button>
    </div>
  );
};
