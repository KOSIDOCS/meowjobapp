import React from "react";
import styled from "styled-components";

import AlertBox from "./AlertBox";
import EmploymentType from "./EmploymentType";
import SeniorityLevel from "./SeniorityLevel";
import SalaryRange from "./SalaryRange";

const CreateAlertComp = () => {
  return (
    <Wrapper>
      <AlertBox />
      <EmploymentType />
      <SeniorityLevel />
      <SalaryRange />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20em;
  display: flex;
  flex-direction: column;
`;

export default CreateAlertComp;
