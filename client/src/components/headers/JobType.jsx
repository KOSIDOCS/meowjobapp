import React, { useState } from "react";
import { Compass, Briefcase } from "react-feather";
import theme from "../screenquery/theme";

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
import styled from "styled-components";

const JobType = ({ currentJob, jobChnage }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (e) => {
    e.preventDefault();
    jobChnage(e.target.value);
  };

  return (
    <Wrapper>
      <CustomIcon size="28" color={theme.textDark} />
      <StyledOuterWrapper>
        <StyledWrapper open={open}>
          <StyledButton onClick={handleOpen}>
            <StyledText>{currentJob}</StyledText>
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
                value="full_time"
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
                value="part_time"
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
                value="contract"
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
                value="permanent"
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

const CustomIcon = styled(Briefcase)`
  margin-right: 14px;
  position: relative;
  top: 11px;
`;

export default JobType;
