import React, { CSSProperties } from 'react';

interface IconProps {
  icon: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon = ({ icon, style, onClick }: IconProps) => {
  return (
    <div onClick={onClick}>
      <img src={icon} style={style} alt="" />;
    </div>
  );
};

export default Icon;
