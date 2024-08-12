import { cn } from '@/client/shared/lib';
import { Button } from '@/client/shared/ui';
import { IconDeviceWatch } from '@tabler/icons-react';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

type SideMenuItemProps = {
  to: string;
  title: string;
  Icon: (props: { className?: string; stroke?: number }) => React.ReactNode;
};
const SideMenuItem = React.memo(function SideMenuItem({ to, title, Icon }: SideMenuItemProps) {
  const match = useMatch(to);
  const selected = Boolean(match);

  return (
    <li>
      <Button
        asChild
        size='sm'
        className={cn(
          'w-full justify-start text-base text-black dark:text-white hover:bg-background bg-transparent',
          {
            ['bg-background']: selected,
          },
        )}
      >
        <Link to={to}>
          <Icon className='mr-1' stroke={1.5} />
          {title}
        </Link>
      </Button>
    </li>
  );
});

export const SideMenu = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={className} {...props}>
      <p className='text-md font-bold text text-muted-foreground uppercase'>Timer</p>
      <ul className='flex flex-col gap-1'>
        <SideMenuItem to='' title='Timer' Icon={IconDeviceWatch} />
        <SideMenuItem to='/timer' title='Timer' Icon={IconDeviceWatch} />
      </ul>
    </nav>
  );
};
