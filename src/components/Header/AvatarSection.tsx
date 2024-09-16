import { Avatar, Stack, Typography } from '@mui/material';

interface AvatarSectionProps {
  name: string;
  avatarUrl: string;
}

export const AvatarSection = (props: AvatarSectionProps) => {
  const { name, avatarUrl } = props;

  return (
    <Stack direction='row' sx={{ alignItems: 'center', gap: 1 }}>
      <Avatar alt='avatar' src={avatarUrl} sx={{ width: 36, height: 36 }} />
      <Typography sx={{ pr: 2 }}>{name}</Typography>
    </Stack>
  );
};
