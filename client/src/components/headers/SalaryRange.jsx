import React, { useState } from "react";
import { Compass, DollarSign } from "react-feather";
import theme from "../screenquery/theme";
import styled from "styled-components";

import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledButton,
  StyledText,
  StyledIconWrapper,
  StyledIconRectangle1,
  StyledIconRectangle2,
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemIcon,
  StyledMenuItemText,
} from "../styledelement/StyledComponents";

const SalaryRange = ({ salary, salaryChnage }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (e) => {
    e.preventDefault();
    salaryChnage(e.target.value);
  };

  return (
    <Wrapper>
      <CustomIcon size="28" color={theme.textDark} />
      <StyledOuterWrapper>
        <StyledWrapper open={open}>
          <StyledButton onClick={handleOpen}>
            <StyledText>{salary}</StyledText>
            <StyledIconWrapper>
              <StyledIconRectangle1 className="rectangle" open={open} />
              <StyledIconRectangle2 className="rectangle" open={open} />
            </StyledIconWrapper>
          </StyledButton>
          <StyledMenu open={open}>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$62k-$70k"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$70k-$77k"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$77k-$84k"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$84k-$91k"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$91k-$99k"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuItemIcon>
                <Compass size="20" color={theme.btnMain} />
              </StyledMenuItemIcon>
              <StyledMenuItemText
                value="$99k or Above"
                onClick={handleChange}
                readOnly
                name="form"
              />
            </StyledMenuItem>
          </StyledMenu>
        </StyledWrapper>
      </StyledOuterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.7em;
`;

const CustomIcon = styled(DollarSign)`
  margin-right: 14px;
  position: relative;
  top: 11px;
`;

export default SalaryRange;
