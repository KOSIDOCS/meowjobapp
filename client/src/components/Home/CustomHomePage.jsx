import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { initiateGetJobs } from "../../actions/jobs";
import { resetErrors } from "../../actions/errors";

import { BodyWrapper, AlertBtn } from "../styledelement/StyledComponents";
import MiddleHead from "../headers/MiddleHead";
import CreateAlertComp from "../createalert/CreateAlertComp";
import JobLayout from "../jobelement/JobLayout";
import JobDetails from "../jobelement/JobDetails";
import TotalJob from "../Home/TotalJob";
import Loader from "../Loader";
import JobsContext from "../../context/jobs";

const CustomHomePage = (props) => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [page, setPage] = useState("home");
  const [pageNumber, setPageNumber] = useState(1);
  const [selection, setSelection] = useState(null);
  const [hideLoadMore, setHideLoadMore] = useState(false);
  const [sortOrder, setSortOrder] = useState("New");

  useEffect(() => {
    setResults(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const loadJobs = (selection) => {
    const { dispatch } = props;
    const { jobValue, jobtype, locaValue, selectSalary, page = 1 } = selection;
    let isLoadMore = false;
    if (selection.hasOwnProperty("page")) {
      isLoadMore = true;
    }
    dispatch(resetErrors());
    setIsLoading(true);
    dispatch(
      initiateGetJobs(
        { jobValue, jobtype, locaValue, selectSalary, page },
        isLoadMore
      )
    )
      .then((response) => {
        if (response && response.jobs.length === 0) {
          setHideLoadMore(true);
        } else {
          setHideLoadMore(false);
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const handleSearch = (selection) => {
    loadJobs(selection);
    setSelection(selection);
  };

  const handleItemClick = (jobId) => {
    setPage("details");
    setJobId(jobId);
    window.scrollTo(0, 0);
  };

  const handleResetPage = () => {
    setPage("home");
  };

  const handleLoadMore = () => {
    loadJobs({ ...selection, page: pageNumber + 1 });
    setPageNumber(pageNumber + 1);
  };

  let jobDetails = {};
  if (page === "details") {
    jobDetails = results.find((job) => job.id === jobId);
  }

  const value = {
    results,
    details: jobDetails,
    onSearch: handleSearch,
    onItemClick: handleItemClick,
    onResetPage: handleResetPage,
    totalJob: results.length,
  };

  const handleSortJob = (sort) => {
    setSortOrder(sort);
  };

  return (
    <JobsContext.Provider value={value}>
      <Loader show={isLoading}>Loading...</Loader>
      <BodyWrapper color>
        <MiddleHead />
        <JobBody>
          <CreateAlertComp />
          <WrapColumn>
            <TotalJob currentSort={sortOrder} sortChnage={handleSortJob} />
            <WrapRow>
              {!_.isEmpty(errors) && (
                <ErrorWrap>
                  <p>{errors.error}</p>
                </ErrorWrap>
              )}
              <JobLayout isWidth={page === "details" && "33%"} />
              <div className={`${page === "home" && "hide"}`}>
                {page === "details" && <JobDetails />}
              </div>
            </WrapRow>
            {results.length > 0 && _.isEmpty(errors) && !hideLoadMore && (
              <LoadMore onClick={isLoading ? null : handleLoadMore}>
                <AlertBtn
                  disabled={isLoading}
                  className={`${isLoading ? "disabled" : ""}`}
                >
                  Load More Jobs
                </AlertBtn>
              </LoadMore>
            )}
          </WrapColumn>
        </JobBody>
      </BodyWrapper>
    </JobsContext.Provider>
  );
};

const JobBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 1em auto;
`;

const ErrorWrap = styled.div`
  max-width: 70%;
  margin: 0 auto;
  color: #f21e08;
  padding: 1rem;
  letter-spacing: 2px;
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
  cursor: default;

  & .disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
const WrapColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const WrapRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

CustomHomePage.propTypes = {
  jobs: PropTypes.array.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  errors: state.errors,
});

export default connect(mapStateToProps)(CustomHomePage);
