import React from "react";
import styled from "styled-components";
import theme from "../screenquery/theme";
import { darken } from "polished";

import { JobAlertInput, AlertBtn } from "../styledelement/StyledComponents";

const AlertBox = () => {
  return (
    <Wrapper>
      <Heading>Create Job Alert</Heading>
      <SubHeading>Create a job alert now and never miss a job</SubHeading>
      <JobAlertInput placeholder="Enter job keyword" />
      <AlertBtn>Create Job Alerts</AlertBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: ${darken(0.12, theme.background)};
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  justify-content: start;
  border-radius: 10px;
  margin-bottom: 20px; /**remeove later */
`;

const Heading = styled.h4`
  color: ${theme.light};
  font-weight: 500;
`;

const SubHeading = styled.h5`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
`;

export default AlertBox;
