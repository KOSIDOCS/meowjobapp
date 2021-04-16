import React, { useState, useContext } from "react";
import {
  FixedMiddle,
  SearchBtn,
  Divider,
} from "../styledelement/StyledComponents";
import JobType from "./JobType";
import SalaryRange from "./SalaryRange";
import JobSearch from "../headers/JobSearch";
import LocationSearch from "../headers/LocationSearch";
import JobsContext from "../../context/jobs";

const MiddleHead = () => {
  const [jobValid, setJobValid] = useState(false);

  const [jobValue, setJobValue] = useState("");

  const [jobtype, setJobtype] = useState("Job Type");

  const [selectSalary, setSalary] = useState("Salary Range");

  const [locaValue, setLocaValue] = useState("Londontowne,MD");

  const { onSearch } = useContext(JobsContext);

  const jobInputChange = (input) => {
    setJobValue(input);
    if (input.length >= 2) {
      setJobValid(true);
    } else {
      setJobValid(false);
    }
  };

  const locaInpuChange = (input) => {
    setLocaValue(input);
  };

  const resetValue = () => {
    setJobValue("");
    setJobValid(false);
  };

  const changedJob = (job) => {
    setJobtype(job);
  };

  const changedSalary = (salary) => {
    setSalary(salary);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ jobValue, jobtype, locaValue, selectSalary });
  };

  return (
    <FixedMiddle dark>
      <JobSearch
        handleJobInpuChange={jobInputChange}
        value={jobValue}
        showCloseBtn={jobValid}
        jobResetValue={resetValue}
      />
      <Divider />
      <LocationSearch value={locaValue} locationChange={locaInpuChange} />
      <Divider />
      <JobType jobChnage={changedJob} currentJob={jobtype} />
      <Divider />
      <SalaryRange salaryChnage={changedSalary} salary={selectSalary} />
      <SearchBtn onClick={handleSearch}>Find Job</SearchBtn>
    </FixedMiddle>
  );
};

export default MiddleHead;
