import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";
import theme from "../screenquery/theme";
import device from "../screenquery/mediaquery";

//Main body wrapper
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.color === true ? theme.dark : theme.light)};
  height: 100%;

  @media ${device.tablet} {
    min-height: 100vh;
  }
`;

//Header wrapper for navbar
export const HeaderWrapper = styled.header`
  display: flex;
  margin: 1.1em 0em 1em 0em;
  width: 100%;
  min-width: 20vw;
  min-height: 10vh;
  background: ${(props) => (props.dark === true ? theme.dark : theme.light)};
  color: ${(props) => (props.dark ? theme.light : theme.textblack)};
  justify-items: start;
  @media ${device.tablet} {
    margin: 1.1em 3em 1em 3em;
    min-height: 10vh;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    margin: 1.1em 3em 1em 3em;
    min-height: 20vh;
    justify-content: space-between;
  }
`;

//wrapper for fixed navbar
export const FixedHead = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-width: 20vw;
  min-height: 8vh;
  padding: 1.6em 5em;
  background: ${(props) =>
    props.dark === true ? darken(0.12, theme.background) : theme.light};
  color: ${(props) => (props.dark ? theme.light : theme.textblack)};
  justify-items: start;
  z-index: 7;
`;

//Second navbar
export const FixedMiddle = styled.form`
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  min-width: 20vw;
  min-height: 6vh;
  padding-left: 1.5em;
  margin: 1em auto;
  background: ${(props) =>
    props.dark === true ? darken(0.12, theme.background) : theme.light};
  color: ${(props) => (props.dark ? theme.light : theme.textblack)};
  justify-items: start;
  border-radius: 10px 10px 10px 10px;
  z-index: 6;
`;

/**Begining of Jobsearch input */
export const JobInput = styled.input`
  width: 100%;
  border: 2px solid ${theme.light};
  outline: none;
  line-height: 0.2em;
  font-size: 1.2em;
  padding: 9px 20px 9px 20px;
  font-family: inherit;
  background: none;
  color: ${theme.light};
  caret-color: ${theme.btnMain};
  transition: all 1s ease;
  border-radius: 1.1em;

  &::placeholder {
    color: ${theme.textDark};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;
/**End of Jobsearch input */

/**Begin Location input */
export const LocationInput = styled(JobInput)`
  border: none;
`;
/**End of Location input */

/**Begin Job alert input */
export const JobAlertInput = styled(JobInput)`
  background: ${theme.colorBorder};
  border-radius: 4px;
  border: 1px solid ${theme.colorBorder};
  color: ${theme.textDark};
  margin-top: 1.4em;
  margin-bottom: 0.8em;
`;
/**End Job Alert Input */

//wrapper for the main navbar links
export const LinkWrapper = styled.div`
  height: 0px;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  cursor: pointer;
  margin-left: 2em;
`;

/* Beginig of custom switch */
const blob = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.12, .94);
  }
  60% {
    transform: scale(.96, 1.06);
  }
`;

const blobChecked = keyframes`
  0% {
        opacity: 1;
        transform: scaleX(1);
    }
    30% {
        transform: scaleX(1.44);
    }
    70% {
        transform: scaleX(1.18);
    }
    50%,
    99% {
        transform: scaleX(1);
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
        opacity: 0;
    }
`;

export const SwitchInput = styled.input`
  display: none;
  & + span {
    width: 50px;
    height: 30px;
    border-radius: 14px;
    transition: all 0.3s ease;
    display: block;
    position: relative;
    background: ${theme.btnMain};
    box-shadow: 0 8px 16px -1px rgba(${theme.btnMain}, 0.2);
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      transition: all 0.3s ease;
    }
    &:before {
      top: 3px;
      left: 5px;
      width: 14px;
      height: 14px;
      border-radius: 9px;
      border: 5px solid #fff;
    }
    &:after {
      top: 5px;
      left: 32px;
      width: 6px;
      height: 18px;
      border-radius: 40%;
      transform-origin: 50% 50%;
      background: #fff;
      opacity: 0;
    }
    &:active {
      transform: scale(0.92);
    }
  }
  &:checked {
    & + span {
      background: ${theme.btnLight};
      box-shadow: 0 8px 16px -1px rgba(${theme.btnLight}, 0.2);
      &:before {
        width: 0px;
        border-radius: 3px;
        margin-left: 27px;
        border-width: 3px;
        background: #fff;
      }
      &:after {
        animation: ${blobChecked} 0.35s linear forwards 0.2s;
      }
    }
  }
  &:not(:checked) {
    & + span {
      &:before {
        animation: ${blob} 0.85s linear forwards 0.2s;
      }
    }
  }
`;
/* End of custom switch */

/**Begin Search Button */
export const SearchBtn = styled.button`
  appearance: none;
  outline: none;
  background: ${darken(0.1, theme.btnMain)};
  color: #fff;
  font-weight: 700;
  font-size: 1em;
  padding: 1.3em 2.9em;
  border: 2px solid ${darken(0.1, theme.btnMain)};
  border-radius: 0px 5px 5px 0px;
  transition: border background 2s ease-in-out;

  &:hover {
    background: ${darken(0.2, theme.btnMain)};
    border: 2px solid ${darken(0.2, theme.btnMain)};
    cursor: pointer;
  }
`;
/**End of Search Button */

/**Begin Alert Button */
export const AlertBtn = styled(SearchBtn)`
  padding: 0.8em 0.7em;
  width: 150px;
  font-size: 0.8em;
  border-radius: 5px 5px 5px 5px;
  appearance: none;
  text-decoration: none;
  text-align: center;
`;
/**End of Alert Button */

/* Begining of custom dropdown */
const prop = { open: Boolean };
const colorTextHover = darken(0.1, theme.light);
const colorMenuItemHover = "rgba(0,0,0,0.5)";

const transitionDuration = "0.35s";

export const StyledOuterWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 56px;
`;

export const StyledWrapper = styled("div", prop)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: ${darken(0.12, theme.background)};
  /* box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025); */
  border-radius: 0.5rem;
  max-height: ${(prop) => (prop.open ? "304px" : "56px")};
  transition: max-height ${transitionDuration},
    border-color ${transitionDuration};

  &:hover {
    border-color: ${darken(0.075, theme.colorBorder)};
  }
`;

export const StyledMenu = styled("div", prop)`
  padding: 0 0.5rem 0.5rem;
  transition: all ${transitionDuration};
`;

export const StyledMenuItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    color: ${theme.light};
    background: ${colorMenuItemHover};
  }
`;

export const StyledMenuItemIcon = styled.span`
  margin-right: 0.325rem;
  font-size: 20px;
  color: ${theme.light};
  border-radius: 50%;
  padding: 2px;
`;

export const StyledMenuItemText = styled.input`
  color: ${theme.textDark};
  cursor: pointer;
  outline: none;
  appearance: none;
  border: none;
  background: none;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem 0 1rem;
  font-weight: 500;
  color: ${theme.textDark};
  height: 56px;
  line-height: 64px;
  width: 100%;
  cursor: pointer;
  background-color: ${darken(0.12, theme.background)};
  transition: border-color ${transitionDuration}, color ${transitionDuration};
  border: none;
  outline: none;
  appearance: none;

  &:hover {
    color: ${colorTextHover};
  }

  &:hover .rectangle {
    background: ${colorTextHover};
  }
`;

export const StyledText = styled.div`
  font-size: 1.075rem;
`;

export const StyledIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const rectangleDefaults = css`
  position: absolute;
  width: 3px;
  height: 10px;
  border-radius: 2px;
  transform-origin: 50% 50%;
  background: ${theme.textDark};
  transition: transform ${transitionDuration}, background ${transitionDuration};
`;

export const StyledIconRectangle1 = styled("div", prop)`
  ${rectangleDefaults};
  transform: rotate(-45deg) scaleY(${(props) => (props.open ? 1.75 : 1)})
    translate(${(props) => (props.open ? "2px, 1px" : 0)});
  top: 8px;
  left: 8px;
`;

export const StyledIconRectangle2 = styled("div", prop)`
  ${rectangleDefaults};
  transform: rotate(45deg) scaleY(${(props) => (props.open ? 1.75 : 1)})
    translate(${(props) => (props.open ? "-2px, 1px" : 0)});
  top: 8px;
  right: 8px;
`;

/* End of custom dropdown */

/**Begin nav divider */
export const Divider = styled.span`
  height: 80.5px;
  width: 1px;
  background: ${darken(0.08, theme.background)};
`;

/**Begin Custom Accordion */
export const AccordionOuter = styled(StyledOuterWrapper, prop)`
  height: ${(prop) => (prop.open ? "270px" : "35px")};
  width: 100%;
`;

export const AccordionWrapper = styled(StyledWrapper)`
  position: relative;
  max-height: ${(prop) => (prop.open ? "304px" : "35px")};
  background: none;
  box-shadow: none;
  border-color: none;
`;

export const AccordionMenu = styled(StyledMenu)`
  padding-left: 0rem;
  margin-top: 0.5rem;
`;

export const AccordionMenuItem = styled(StyledMenuItem)`
  height: 20px;
  padding-left: 0rem;
  align-items: left;
  background: none;
  position: relative;
  margin-bottom: 0.9rem;
`;

export const AccordionMenuItemIcon = styled(StyledMenuItemIcon)`
  margin-right: 0.945rem;
  font-size: 0px;
  color: none;
  border-radius: 50%;
  padding: 2px;
`;

export const AccordionMenuItemText = styled.label`
  color: ${theme.textDark};
  font-size: 0.9rem;
  cursor: pointer;
`;

export const AccordionMenuItemBadg = styled(StyledMenuItemIcon)`
  position: absolute;
  font-size: 0.7rem;
  color: ${theme.textDark};
  border-radius: 2px;
  padding: 4px;
  top: 0;
  left: 14.54rem;
  background: ${darken(0.12, theme.background)};
`;

export const AccordionBtn = styled(StyledButton)`
  height: 35px;
  padding-left: 0rem;
  color: ${theme.light};
  background: none;
`;

export const AccordionText = styled(StyledText)`
  font-weight: 700;
`;

export const AccordionIconWrapper = styled(StyledIconWrapper)``;

export const AccordionRec1 = styled(StyledIconRectangle1)`
  transform: rotate(-45deg) scaleY(${(props) => (props.open ? 1 : 1)})
    translate(${(props) => (props.open ? "7px, 1px" : 0)});
  top: 8px;
  left: 22px;
`;

export const AccordionRec2 = styled(StyledIconRectangle2)`
  transform: rotate(45deg) scaleY(${(props) => (props.open ? 1 : 1)})
    translate(${(props) => (props.open ? "-7px, 1px" : 0)});
  top: 8px;
  right: -8px;
`;
/**End Custom Acordion */
