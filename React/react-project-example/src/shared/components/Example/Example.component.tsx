import { StyledExampleContainer, StyledExampleText } from './style';
import IExampleComponent from './Example.types';

export const Example = ({ code }: IExampleComponent) => {
  return (
    <StyledExampleContainer>
      <StyledExampleText>{code}</StyledExampleText>
    </StyledExampleContainer>
  );
};
