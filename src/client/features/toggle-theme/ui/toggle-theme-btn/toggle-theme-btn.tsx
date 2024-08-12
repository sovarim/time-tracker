import { Button } from '@/client/shared/ui';
import { IconSunMoon } from '@tabler/icons-react';
import { useToggleTheme } from '../../model';

export const ToggleThemeBtn = () => {
  const toggleTheme = useToggleTheme();

  return (
    <Button size='icon' variant='outline' onClick={toggleTheme}>
      <IconSunMoon />
    </Button>
  );
};
