import { useCallback } from 'react';
import { StyledExampleButton, StyledExampleText } from './style';
import { IExampleButton } from './Button.types';

export const Button = ({
  onClickFunc,
  isDisabled,
  isLoading,
  ariaLabel,
  refItem,
  customStyle,
  typographyStyle
}: IExampleButton) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !isLoading && onClickFunc) {
        onClickFunc(event);
      }
    },
    [onClickFunc, isDisabled, isLoading]
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
