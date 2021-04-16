import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import theme from "../screenquery/theme";
import ImageBig from "../../images/working-at-night.jpg";
import { darken } from "polished";
import { Heart, Share2 } from "react-feather";
import { AlertBtn } from "../styledelement/StyledComponents";
import JobsContext from "../../context/jobs";
import moment from "moment";
import { findLink } from "../../utils/constants";
import useObserver from "../../custom-hooks/observer";
import Image from "../Home/Image";
import _ from 'lodash';

const JobDetails = () => {
  const { details, onResetPage } = useContext(JobsContext);
  const imageRef = useRef();
  const [isVisible] = useObserver(imageRef);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
    created_at,
    redirect_url,
    created,
    contract_type,
    salary_min
  } = details;

  const jobLocation = (location) => {
    let job;

    if (typeof location === 'object') {
      job = location?.display_name
    } else {
      job = location;
    }
    return job;
  }

  const jobType = (type, contract) => {
    let jobtype = 'Not available';
    if (!_.isEmpty(type)) {
      jobtype = type;
    }

    if (!_.isEmpty(contract)) {
      jobtype = contract;
    }
    return jobtype;
  }

  const content = _.isObject(company) ? company?.display_name : company;

  const salary = salary_min ? `$${salary_min}/Year` : "Not available";

  return (
    <Wrapper>
      <ImgCard ref={imageRef}>
        {isVisible && <ImgIcon src={company_logo} alt={company} />}
      </ImgCard>
      <TopHeader>
        <TopHead>
          <LeftWrap>
            <JobTitle>{title.replace(/(<([^>]+)>)/gi, "")}</JobTitle>
            <JobLocation>{jobLocation(location)}.</JobLocation>
          </LeftWrap>
          <RightWrap>
            <JobShare>
              <ShareBtn>
                <Heart size="20" color={theme.textDark} />
              </ShareBtn>
              <ShareBtn>
                <Share2 size="20" color={theme.textDark} />
              </ShareBtn>
            </JobShare>
            <JobTime>Posted {moment(new Date(created_at ?? created)).fromNow()}</JobTime>
          </RightWrap>
        </TopHead>
        <GroupWrap>
          <ItemGroup>
            <ItemHead>Experience</ItemHead>
            <ItemSub>Not available</ItemSub>
          </ItemGroup>
          <Divider />
          <ItemGroup>
            <ItemHead>Work Level</ItemHead>
            <ItemSub>Not available</ItemSub>
          </ItemGroup>
          <Divider />
          <ItemGroup>
            <ItemHead>Employee Type</ItemHead>
            <ItemSub>{jobType(type, contract_type)}</ItemSub>
          </ItemGroup>
          <Divider />
          <ItemGroup>
            <ItemHead>Offer Salary</ItemHead>
            <ItemSub>{salary}</ItemSub>
          </ItemGroup>
        </GroupWrap>
      </TopHeader>
      <Description>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewDetail
          dangerouslySetInnerHTML={{ __html: content }}
        ></OverviewDetail>
        <DescriptTitle>Job Description</DescriptTitle>
        <DescriptDetail
          dangerouslySetInnerHTML={{ __html: description }}
        ></DescriptDetail>
        <BtnWrap>
          <AlertBtn
            as="a"
            href={findLink(how_to_apply ?? redirect_url, company_url)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </AlertBtn>
          <ViewBtn as="a" href="/#" onClick={onResetPage}>
            Close
          </ViewBtn>
        </BtnWrap>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  background: ${darken(0.12, theme.background)};
  border-radius: 8px;
`;

const ImgCard = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${ImageBig});
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
`;

const ImgIcon = styled(Image)`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 12px;
  border: 4px solid ${theme.light};
  position: absolute;
  left: 40px;
  top: 165px;
  background: ${theme.dark};
`;

const TopHeader = styled.header`
  width: 100%;
  margin-top: 80px;
  position: relative;
  left: 40px;
  right: 4em;
`;

const TopHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftWrap = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const JobTitle = styled.h4`
  color: ${theme.light};
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.5em;
`;

const JobLocation = styled.h5`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
  margin-bottom: 10px;
  font-size: 0.85em;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  left: 140px;
`;

const JobShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const ShareBtn = styled.span`
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.2em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  border: 1px solid ${theme.textDark};
  border-radius: 8px;
  margin-left: 1.2em;
  cursor: pointer;
`;

const JobTime = styled.h5`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
  margin-bottom: 10px;
  text-align: right;
`;

const GroupWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${darken(0.05, theme.background)};
  border-radius: 8px;
  position: relative;
  width: 87%;
  margin-top: 30px;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
`;

const ItemHead = styled.span`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
  margin-bottom: 10px;
  font-size: 0.85em;
`;

const ItemSub = styled.span`
  color: ${theme.light};
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 0.98em;
`;

const Divider = styled.span`
  height: 99.5px;
  width: 1px;
  background: ${darken(0.08, theme.background)};
`;

const Description = styled.div`
  width: 87%;
  margin-top: 50px;
  position: relative;
  left: 40px;
  right: 4em;
  display: flex;
  flex-direction: column;
`;

const OverviewTitle = styled.span`
  color: ${theme.light};
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.1em;
`;

const OverviewDetail = styled.p`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
  margin-bottom: 50px;
  font-size: 0.85em;

  & a {
    display: none;
  }
`;

const DescriptTitle = styled(OverviewTitle)``;

const DescriptDetail = styled(OverviewDetail)`
  margin-bottom: 10px;
  & strong,
  & b,
  & h1,
  & h2 {
    text-decoration: none;
    color: ${theme.light};
    line-height: 2;
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  & p {
    margin-bottom: 20px;
  }

  & ul {
    list-style: none;
    padding: 0;

    & li {
      padding-left: 1.3em;
      margin-bottom: 0.8em;
    }

    & a {
      display: none;
    }

    & li:before {
      content: " ";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 3px solid ${theme.listCircle};
      background: none;
      display: inline-block;
      margin-left: -1.3em;
      margin-right: 0.7em;
      position: relative;
      top: 2px;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 87%;
  margin-bottom: 30px;
`;

const ViewBtn = styled(AlertBtn)`
  margin-left: 10px;
  background: ${darken(0.16, theme.contentBg)};
  border-color: ${darken(0.16, theme.contentBg)};
  cursor: pointer;
  color: ${theme.textDark};
  appearance: none;
  text-decoration: none;
  text-align: center;
`;

export default JobDetails;
