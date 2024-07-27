import { useTheme } from '@mui/joy';

export const Tasks = () => {
  const theme = useTheme();

  console.log({ theme });

  return <div>Tasks</div>;
};
