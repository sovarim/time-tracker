import { Avatar, AvatarFallback, AvatarImage } from '@/client/shared/ui';
import { SideMenu } from '../side-menu';
import { ToggleThemeBtn } from '@/client/features/toggle-theme/ui';

export const Sidebar = () => {
  return (
    <aside className='w-[var(--sidebar-width)] px-3 py-4 bg-muted h-full shadow-md'>
      <header className='flex items-center gap-2 justify-between'>
        <div className='flex items-center gap-2'>
          <Avatar className='shrink-0'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@sovarim' />
            <AvatarFallback>AT</AvatarFallback>{' '}
          </Avatar>
          <div className='self-stretch flex flex-col justify-center'>
            <p className='text-sm font-medium'>Abdul Taramov</p>
            <p className='text-xs text-muted-foreground'>@sovarim</p>
          </div>
        </div>
        <ToggleThemeBtn />
      </header>
      <SideMenu className='mt-6' />
    </aside>
  );
};
