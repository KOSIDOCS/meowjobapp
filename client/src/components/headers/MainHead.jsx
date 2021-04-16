import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../screenquery/theme";
import { Heart } from "react-feather";

import {
  FixedHead,
  LinkWrapper,
  Label,
  SwitchInput,
} from "../styledelement/StyledComponents";

const MainHead = (props) => {
  return (
    <FixedHead dark>
      <CustomLogo to="/">Meow</CustomLogo>
      <LinkWrapper>
        <CustomLink to="/">Find Job</CustomLink>
        <CustomLink to="/companyreview">Company Review</CustomLink>
        <CustomLink to="/salaries">Find Salaries</CustomLink>
      </LinkWrapper>

      <LinkWrapper>
        <SaveBtn to="/saved">
          <Heart size="30" />
        </SaveBtn>
        <Label>
          <SwitchInput type="checkbox" />
          <span></span>
        </Label>
      </LinkWrapper>
    </FixedHead>
  );
};

const CustomLink = styled(NavLink)`
  text-transform: capitalize;
  margin-left: 2em;
  appearance: none;
  outline: none;
  text-decoration: none;
  /* color: ${theme.textDark}; */

  &:link,
  &:visited {
    color: ${theme.textDark};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${theme.textLight};
  }
`;

const CustomLogo = styled(CustomLink)`
  height: 1em;
  margin: 0;
  position: relative;
  top: -0.6em;

  &:first-letter {
    color: ${theme.btnMain};
    font-weight: bold;
    font-size: 2em;
    margin-right: 0.1em;
  }

  &:hover {
    color: ${theme.textDark};
  }
`;

const SaveBtn = styled(CustomLink)`
  border-radius: 0.3em;
  height: 1em;
  margin: 0;

  &:link,
  &:visited {
    color: ${theme.btnMain};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${theme.textLight};
  }
`;

export default MainHead;
