import { AvatarProps, Avatar } from '@mui/joy';

export type UserAvatarProps = Omit<AvatarProps, 'src' | 'children'>;

export const UserAvatar = (props: UserAvatarProps) => {
  return <Avatar {...props}>AT</Avatar>;
};
