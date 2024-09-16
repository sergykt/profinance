import { Paper, Stack, Typography, Input } from '@mui/material';
import { memo } from 'react';

interface FilterProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: 'text' | 'number';
  width?: string;
}

export const Filter = memo((props: FilterProps) => {
  const { label, placeholder, onChange, inputType = 'text', width = '10rem' } = props;

  return (
    <Paper elevation={1} sx={{ p: 1, borderRadius: 3 }}>
      <Stack direction='row' sx={{ alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '0.875rem' }}>{label}</Typography>
        <Input
          sx={{
            backgroundColor: '#f7f8f8',
            borderRadius: 3,
            pl: 1.5,
            pr: 1.5,
            pt: 1,
            pb: 1,
            fontSize: '0.875rem',
            width,
          }}
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          disableUnderline
        />
      </Stack>
    </Paper>
  );
});
