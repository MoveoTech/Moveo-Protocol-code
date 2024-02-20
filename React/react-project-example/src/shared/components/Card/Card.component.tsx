'use client';

import React, { useMemo, useState } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { KEYVALUE_RESOURCES } from '@/data/resources';
import {
  StyledCardCon,
  StyledTitleIcon,
  StyledIconAndTextDropdown,
  StyledDropdownContent,
  StyledIconAndTextNormal,
  StyledDropDownTitle,
  StyledDropDownText,
  StyledCardTitle
} from './style';

type ICardProps = {
  backgroundColor: string;
  text?: string;
  icon?: string;
  title?: string;
  isDropdown?: boolean;
  isLoaderCard?: boolean;
};

const CardV1 = ({
  backgroundColor,
  text,
  title,
  icon,
  isDropdown = false,
  isLoaderCard = false
}: ICardProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const calcIsTitle = useMemo(() => (title?.length ?? 0) > 0, [title]);
  return (
    <StyledCardCon
      backgroundColor={backgroundColor}
      isDropdown={isDropdown}
      isLoaderCard={isLoaderCard}
      isTitle={calcIsTitle}
    >
      <StyledTitleIcon>
        {title && <Typography variant="h3">{title}</Typography>}
      </StyledTitleIcon>
      {isDropdown ? (
        <StyledIconAndTextDropdown>
          <IconButton onClick={handleToggleDropdown}>
            {isDropdownOpen && <ExpandLess />}
            {!isDropdownOpen && <ExpandMore />}
          </IconButton>
          {text && (
            <StyledDropDownTitle variant="h4">{text}</StyledDropDownTitle>
          )}
        </StyledIconAndTextDropdown>
      ) : (
        <StyledIconAndTextNormal>
          {icon && <img src={icon} alt="" />}
          {text && (
            <StyledCardTitle variant="h4" isLoaderCard={isLoaderCard}>
              {text}
            </StyledCardTitle>
          )}
        </StyledIconAndTextNormal>
      )}
      <Collapse in={isDropdownOpen}>
        <StyledDropdownContent backgroundColor={backgroundColor}>
          <StyledDropDownText>
            {KEYVALUE_RESOURCES.DROPDOWN_TEXT}
          </StyledDropDownText>
        </StyledDropdownContent>
      </Collapse>
    </StyledCardCon>
  );
};

export default CardV1;
