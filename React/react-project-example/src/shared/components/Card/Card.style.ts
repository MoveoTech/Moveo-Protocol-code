import { ColumnContainer, RowContainer } from '@/style/shared.style';
import { Typography, styled } from '@mui/material';

export const StyledCardCon = styled('div')<{
  backgroundColor: string;
  isDropdown: boolean;
  isLoaderCard: boolean;
  isTitle: boolean;
}>(({ backgroundColor, isDropdown, isLoaderCard, isTitle }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: backgroundColor,
  padding: isDropdown ? 'unset' : '16px 14px',
  borderRadius: '8px',
  gap: isDropdown ? 'unset' : isTitle ? '12px' : '0',
  width: isLoaderCard ? '602px' : 'unset',
  height: isDropdown
    ? 'unset'
    : isTitle
      ? '100%'
      : isLoaderCard
        ? '100%'
        : '100%',
  boxSizing: 'border-box'
}));

export const StyledTitleIcon = styled(RowContainer)({
  gap: '8px'
});

export const StyledDropdownContent = styled(ColumnContainer)<{
  backgroundColor: string;
}>(({ backgroundColor }) => ({
  padding: '12px',
  marginTop: '8px',
  borderRadius: '4px',
  backgroundColor: backgroundColor
}));

export const StyledIconAndTextDropdown = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '51%',
  textAlign: 'center',
  alignItems: 'center'
});

export const StyledIconAndTextNormal = styled('div')({
  display: 'flex',
  gap: '10px'
});

export const StyledDropDownTitle = styled(Typography)({
  fontSize: '14px',
  fontFamily: 'Montserrat SemiBold',
  fontWeight: 600,
  lineHeight: '16px'
});
export const StyledDropDownText = styled(Typography)({
  fontSize: '12px',
  fontFamily: 'Montserrat Medium',
  fontWeight: 500,
  lineHeight: '16px',
  whiteSpace: 'pre-line'
});

export const StyledCardTitle = styled(Typography)<{ isLoaderCard: boolean }>(
  ({ isLoaderCard }) => ({
    marginTop: isLoaderCard ? '2px' : '0',
    lineHeight: '27px'
  })
);
