import { Avatar, AvatarFallback, AvatarImage } from '@/client/shared/ui/avatar';
import { Sidebar } from '@/client/widgets/sidebar';
import { IconTimeDurationOff } from '@tabler/icons-react';

export const MainLayout = () => {
  return (
    <div className='h-full'>
      <Sidebar />
    </div>
  );
};
