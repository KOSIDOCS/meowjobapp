import React from 'react'
import { BodyWrapper } from "../styledelement/StyledComponents";
import styled from "styled-components";
import theme from "../screenquery/theme";

const FindSalaries = () => {
    return (
        <BodyWrapper color>
            <Heading>Coming Soon, We are getting this ready.<span role="img" aria-label="emoji">😊</span></Heading>
        </BodyWrapper>
    )
}

const Heading = styled.h4`
  color: ${theme.light};
  font-size: 3rem;
  font-weight: 900;
  margin: 10rem auto;

`;
export default FindSalaries;
