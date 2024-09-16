import { NavLink } from 'react-router-dom';
import { List, ListItem, Link, Stack } from '@mui/material';

const legalLinks = [
  { title: 'Пользовательское соглашение', url: '/' },
  { title: 'Политика конфиденциальности', url: '/' },
  { title: 'Юридическая информация', url: '/' },
  { title: 'Публичная оферта', url: '/' },
];

export const LegalLinks = () => {
  return (
    <Stack>
      <List>
        {legalLinks.map((link) => (
          <ListItem
            key={link.title}
            sx={{
              pt: 1,
              pb: 1,
              pr: 0,
              pl: 0,
              '&:not(:last-of-type)': {
                borderBottom: '1px solid #657193',
              },
            }}
          >
            <Link
              component={NavLink}
              to={link.url}
              sx={{
                color: '#657193',
                fontSize: '0.875rem',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
              underline='none'
            >
              {link.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
