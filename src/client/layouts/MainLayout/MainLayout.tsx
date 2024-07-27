import { Header } from '@/client/widgets/Header';
import { PropsWithChildren } from 'react';

export type MainLayoutProps = PropsWithChildren;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
    </div>
  );
};
