import { MenuList, MenuItem, Stack, Typography } from '@mui/material';
import { PiNotebookFill } from 'react-icons/pi';
import { HiDocumentMinus } from 'react-icons/hi2';
import { IoMdSettings } from 'react-icons/io';
import { MdEditDocument } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';

const menuList = [
  { title: 'Настройки', icon: <IoMdSettings /> },
  { title: 'Внесение данных', icon: <MdEditDocument /> },
  { title: 'Отчеты', icon: <HiDocumentMinus /> },
  { title: 'База знаний', icon: <PiNotebookFill /> },
];

export const SidebarMenu = () => {
  return (
    <MenuList sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, pt: 2 }}>
      {menuList.map((item) => (
        <MenuItem
          key={item.title}
          sx={{
            backgroundColor: 'secondary.main',
            '&:hover': { backgroundColor: 'secondary.dark' },
            '&:active': { backgroundColor: 'secondary.dark' },
            borderRadius: 1.5,
          }}
        >
          <Stack
            direction='row'
            sx={{ alignItems: 'center', gap: 1.5, pt: 0.5, pb: 0.5, width: '100%' }}
          >
            {item.icon}
            <Typography sx={{ mr: 'auto' }}>{item.title}</Typography>
            <RiArrowDownSFill color='#4e5977' />
          </Stack>
        </MenuItem>
      ))}
    </MenuList>
  );
};
