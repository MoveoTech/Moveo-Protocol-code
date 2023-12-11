import { StyledExampleContainer } from './Example.style';
import IExampleComponent from './Example.types';

export const Example = ({ code }: IExampleComponent) => {
  return <StyledExampleContainer>{code}</StyledExampleContainer>;
};
