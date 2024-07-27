import { UserAvatar } from '@/client/entities/user/ui';
import { UserInfo } from '@/client/entities/user/ui/UserInfo';
import { Box, Dropdown, Menu, MenuButton, MenuItem, Sheet, Typography } from '@mui/joy';
import { IconClock2 } from '@tabler/icons-react';

export const Header = () => {
  return (
    <Sheet
      component='header'
      variant='plain'
      sx={(theme) => ({
        padding: 1.5,
        bgcolor: theme.palette.primary[500],
        display: 'flex',
        justifyContent: 'space-between',
      })}
    >
      <Box
        component='span'
        sx={(theme) => ({
          color: theme.palette.common.white,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          '& > svg': {
            flexShrink: 0,
          },
        })}
      >
        <IconClock2 size={36} stroke={2} />
        <Typography
          level='h3'
          component='h1'
          sx={(theme) => ({
            color: theme.palette.common.white,
            lineHeight: theme.typography.h3.fontSize,
          })}
        >
          TimeTracker
        </Typography>
      </Box>
      <Dropdown>
        <UserAvatar component={MenuButton} />
        <Menu
          placement='bottom-start'
          sx={() => ({ padding: 2, border: 'none', width: '100%', maxWidth: 300 })}
        >
          <UserInfo />
        </Menu>
      </Dropdown>
    </Sheet>
  );
};
