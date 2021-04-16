import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../screenquery/theme";
import { darken } from "polished";
import { AlertBtn } from "../styledelement/StyledComponents";
import { Heart } from "react-feather";
import moment from "moment";
import JobsContext from "../../context/jobs";
import { findLink } from "../../utils/constants";
import Image from "../Home/Image";
import useObserver from "../../custom-hooks/observer";

const Job = ({
  img,
  title,
  descript,
  type,
  location,
  created,
  index,
  id,
  how_to_apply,
  company_url,
  company,
}) => {
  const { onItemClick } = useContext(JobsContext);
  const imageRef = useRef();
  const [isVisible] = useObserver(imageRef);
  const [activeColor, setActiveColor] = useState(false);
  const [mainIndex, setIndex] = useState(index + 1);
  const back = useRef();

  const shorten = (word) => {
    return descript.slice(0, 120) + "....";
  };

  const changeJobColor = (Index) => {
    console.log(Index, mainIndex);
    if (Index === mainIndex) {
      document.getElementById("me").style.backgroundColor = "#fff";
    } else if (Index !== mainIndex) {
      document.getElementById("me").style.backgroundColor = "#000";
    }
  };

  return (
    <Wrapper id="me" index={index + 1} activeColor={activeColor} ref={back}>
      <TopWrap ref={imageRef}>
        {/* <CompanyLogo src={img} alt="Company Image" /> */}
        {isVisible && <Image src={img} alt={company} />}
        <SaveBtn>
          <Heart size="28" />
        </SaveBtn>
      </TopWrap>
      <DescrptWrap>
        <Heading>{title.replace(/(<([^>]+)>)/gi, "")}</Heading>
        <SubHeading
          dangerouslySetInnerHTML={{ __html: shorten(descript) }}
        ></SubHeading>
      </DescrptWrap>
      <RequireWrap>
        <RequireBtn>{type}</RequireBtn>
        <RequireBtn>{location}</RequireBtn>
        <RequireBtn>{moment(new Date(created)).fromNow()}</RequireBtn>
      </RequireWrap>
      <BtnWrap>
        <AlertBtn
          as="a"
          href={findLink(how_to_apply, company_url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </AlertBtn>
        <ViewBtn onClick={() => onItemClick(id)}>View</ViewBtn>
      </BtnWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  /* background: ${darken(0.12, theme.background)}; */
  background: ${(props) =>
    props.active ? theme.activeColor : darken(0.12, theme.background)};
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  justify-content: start;
  border-radius: 10px;
  margin-bottom: 20px; /**remeove later */
  /* margin-right: 30px; */
  margin-left: 30px;
`;

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const ViewBtn = styled(AlertBtn)`
  margin-left: 10px;
  background: ${darken(0.16, theme.contentBg)};
  border-color: ${darken(0.16, theme.contentBg)};
  cursor: pointer;
  color: ${theme.textDark};
`;

const RequireBtn = styled(ViewBtn)`
  color: ${theme.light};
  font-size: 0.6rem;
  padding: 0.8em;
  cursor: auto;

  &:first-of-type {
    margin-left: 0;
  }
`;

const DescrptWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 4px;
`;

const SaveBtn = styled.span`
  color: ${theme.btnMain};
  cursor: pointer;

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

const Heading = styled.h4`
  color: ${theme.light};
  font-weight: 500;
  margin-bottom: 10px;
`;

const SubHeading = styled.h5`
  color: ${theme.textDark};
  font-weight: 400;
  line-height: 1.9em;
  margin-bottom: 10px;

  & p,
  & strong,
  & a,
  & li,
  & ul,
  & h1,
  & h2,
  & b {
    list-style-type: none;
    list-style: none;
    appearance: none;
    outline: none;
    text-decoration: none;
    color: ${theme.textDark};
    line-height: 2;
    font-size: 0.8rem;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const RequireWrap = styled(BtnWrap)`
  margin-bottom: 30px;
`;

export default Job;
