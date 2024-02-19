import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledExampleButton = styled(Button)({
  color: 'black',
  padding: '8px 12px',
  height: '48px',
  width: '96px',
  border: 'solid black',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 150ms linear',
  '&:hover': {
    backgroundColor: 'red'
  }
});

export const StyledExampleText = styled(Typography)({
  fontSize: '18px'
});
