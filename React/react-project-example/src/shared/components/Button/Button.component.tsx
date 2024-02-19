import { useCallback } from 'react';
import { StyledExampleButton, StyledExampleText } from './style';
import { IExampleButton } from './Button.types';

export const Button = ({
  onClickFunc,
  isDisabled,
  loading,
  ariaLabel,
  refItem,
  customStyle,
  typographyStyle
}: IExampleButton) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading && onClickFunc) {
        onClickFunc(event);
      }
    },
    [onClickFunc, isDisabled, loading]
  );
  return (
    <StyledExampleButton
      onClick={(event) => handleClick(event)}
      aria-label={ariaLabel}
      ref={refItem}
      sx={customStyle}
    >
      <StyledExampleText sx={typographyStyle}>text</StyledExampleText>
    </StyledExampleButton>
  );
};
