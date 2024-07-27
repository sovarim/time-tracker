import { MainLayout } from '@/client/layouts/MainLayout/MainLayout';
import { Button, useColorScheme } from '@mui/joy';

export const Tasks = () => {
  const { setColorScheme } = useColorScheme();

  return (
    <MainLayout>
      <Button color='success' onClick={() => setColorScheme('light')}>
        Кнопка
      </Button>
    </MainLayout>
  );
};
