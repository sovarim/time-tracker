import { Box, Typography } from '@mui/joy';
import { UserAvatar } from '../UserAvatar';

export const UserInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <UserAvatar
        size='lg'
        sx={(theme) => ({ width: 80, height: 80, fontSize: theme.typography.h3 })}
      />
      <Typography level='h4' component='p' textAlign='center'>
        Abdul Taramov
      </Typography>
    </Box>
  );
};
