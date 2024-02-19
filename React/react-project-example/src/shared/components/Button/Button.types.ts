import { SxProps } from '@mui/material';

export interface IExampleButton {
  onClickFunc: (param: any) => void;
  label: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  refItem?: any;
  customStyle?: React.CSSProperties | SxProps;
  typographyStyle?: React.CSSProperties;
  isLoading?: boolean;
  ariaLabel?: string;
}
