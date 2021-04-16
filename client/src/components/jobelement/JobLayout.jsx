import React, { useContext } from "react";
import styled from "styled-components";
import Job from "../jobelement/Job";
import Jobs from "../../jobs.json";
import JobsContext from "../../context/jobs";
import _ from 'lodash'

const JobLayout = (props) => {
  const { results } = useContext(JobsContext);

  const location = (jobs) => {
    let job;

    if (typeof jobs.location === 'object') {
      job = jobs?.location?.display_name
    } else {
      job = jobs?.location;
    }
    return job;
  }

  const jobType = (jobs) => {
    let type = 'Not available';
    if (!_.isEmpty(jobs?.type)) {
      type = jobs?.type;
    }

    if (!_.isEmpty(jobs?.contract_type)) {
      type = jobs?.contract_type;
    }
    return type;
  }

  

  return (
    <Wrapper isWidth={props.isWidth}>
      {results.map((job, index) => (
        <Job
          img={job?.company_logo ?? ""}
          title={job.title}
          descript={job.description}
          type={jobType(job)}
          location={location(job)}
          created={job?.created_at ?? job.created}
          key={job.id}
          index={index}
          id={job.id}
          how_to_apply={job.how_to_apply ?? job.redirect_url}
          company_url={job.company_url ?? job.redirect_url}
          company={job.company ?? job?.company?.display_name}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(props) => (props.isWidth ? props.isWidth : "100%")};
  display: flex;
  flex-direction: row;
  /* margin-left: 30px; *remove later */
  flex-wrap: wrap;
  margin-right: ${(props) => props.isWidth && "55px"};
`;

export default JobLayout;
