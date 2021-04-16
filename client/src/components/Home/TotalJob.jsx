import React, { useState, useContext } from "react";
import styled from "styled-components";
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
import { Compass } from "react-feather";
import JobsContext from "../../context/jobs";

const TotalJob = ({ currentSort, sortChnage }) => {
  const [open, setOpen] = useState(false);
  const { totalJob } = useContext(JobsContext);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (e) => {
    e.preventDefault();
    sortChnage(e.target.value);
  };

  return (
    <Wrapper>
      <TotalDisplay>Showing {totalJob} Jobs</TotalDisplay>
      <SortWrap>
        <SortText>Sort by:</SortText>
        <CustomOuterWrapper>
          <CustomWrapper open={open}>
            <CustomButton onClick={handleOpen}>
              <StyledText>{currentSort}</StyledText>
              <StyledIconWrapper>
                <StyledIconRectangle1 className="rectangle" open={open} />
                <StyledIconRectangle2 className="rectangle" open={open} />
              </StyledIconWrapper>
            </CustomButton>
            <StyledMenu open={open}>
              <StyledMenuItem>
                <StyledMenuItemIcon>
                  <Compass size="20" color={theme.btnMain} />
                </StyledMenuItemIcon>
                <StyledMenuItemText
                  value="Newest Post"
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
                  value="Oldest Post"
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
                  value="Date"
                  onClick={handleChange}
                  readOnly
                  name="form"
                />
              </StyledMenuItem>
            </StyledMenu>
          </CustomWrapper>
        </CustomOuterWrapper>
      </SortWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  margin-left: 59px; /**remove later */
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const CustomOuterWrapper = styled(StyledOuterWrapper)`
  position: relative;
  top: -15px;
`;

const CustomWrapper = styled(StyledWrapper)`
  background: ${theme.dark};
`;

const CustomButton = styled(StyledButton)`
  background-color: ${theme.dark};
`;

const SortWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const TotalDisplay = styled.h4`
  color: ${theme.light};
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.5em;
  text-transform: capitalize;
`;

const SortText = styled(TotalDisplay)`
  text-transform: none;
  font-weight: 300;
`;

export default TotalJob;
