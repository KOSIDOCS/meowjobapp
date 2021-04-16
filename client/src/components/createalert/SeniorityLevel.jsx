import React, { useState } from "react";

import {
  AccordionOuter,
  AccordionWrapper,
  AccordionBtn,
  AccordionText,
  AccordionIconWrapper,
  AccordionMenuItemIcon,
  AccordionRec1,
  AccordionRec2,
  AccordionMenu,
  AccordionMenuItem,
  AccordionMenuItemText,
  AccordionMenuItemBadg,
} from "../styledelement/StyledComponents";

import CustomCheck from "./CustomCheck";

const SeniorityLevel = ({ employTypeChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (e) => {
    e.preventDefault();
    employTypeChange(e.target.value);
  };

  return (
    <AccordionOuter open={open}>
      <AccordionWrapper open={open}>
        <AccordionBtn onClick={handleOpen}>
          <AccordionText>Seniority Level</AccordionText>
          <AccordionIconWrapper>
            <AccordionRec1 open={open} />
            <AccordionRec2 open={open} />
          </AccordionIconWrapper>
        </AccordionBtn>
        <AccordionMenu open={open}>
          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Student Level"
                name="Seniority Level"
                value="Student Level"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Student Level">
              Student Level
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>98</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Entry Level"
                name="Seniority Level"
                value="Entry Level"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Entry Level">
              Entry Level
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>44</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Mid Level"
                name="Seniority Level"
                value="Mid Level"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Mid Level">
              Mid Level
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>35</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Senior Level"
                name="Seniority Level"
                value="Senior Level"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Senior Level">
              Senior Level
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>45</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Directors"
                name="Seniority Level"
                value="Directors"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Directors">
              Directors
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>21</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="VP or Above"
                name="Seniority Level"
                value="VP or Above"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="VP or Above">
              VP or Above
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>56</AccordionMenuItemBadg>
          </AccordionMenuItem>
        </AccordionMenu>
      </AccordionWrapper>
    </AccordionOuter>
  );
};

export default SeniorityLevel;
