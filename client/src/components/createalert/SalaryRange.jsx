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

const SalaryRange = ({ employTypeChange }) => {
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
          <AccordionText>Salary Range</AccordionText>
          <AccordionIconWrapper>
            <AccordionRec1 open={open} />
            <AccordionRec2 open={open} />
          </AccordionIconWrapper>
        </AccordionBtn>
        <AccordionMenu open={open}>
          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="1" name="Salary Range" value="$700-$1000" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="1">
              $700-$1000
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>34</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="2" name="Salary Range" value="$1000-$1200" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="2">
              $1000-$1200
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>34</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="3" name="Salary Range" value="$1200-$1400" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="3">
              $1200-$1400
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>22</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="4" name="Salary Range" value="$1500-$1800" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="4">
              $1500-$1800
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>12</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="5" name="Salary Range" value="$2000-$3000" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="5">
              $2000-$3000
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>26</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck id="6" name="Salary Range" value="$5000 or Above" />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="6">
              $5000 or Above
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>28</AccordionMenuItemBadg>
          </AccordionMenuItem>
        </AccordionMenu>
      </AccordionWrapper>
    </AccordionOuter>
  );
};

export default SalaryRange;
