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

const EmploymentType = ({ employTypeChange }) => {
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
          <AccordionText>Type of Employment</AccordionText>
          <AccordionIconWrapper>
            <AccordionRec1 open={open} />
            <AccordionRec2 open={open} />
          </AccordionIconWrapper>
        </AccordionBtn>
        <AccordionMenu open={open}>
          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Full Time"
                name="Employment Type"
                value="Full Time Jobs"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Full Time">
              Full Time Jobs
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>56</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Part Time Jobs"
                name="Employment Type"
                value="Part Time Jobs"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Part Time Jobs">
              Part Time Jobs
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>34</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Remote Jobs"
                name="Employment Type"
                value="Remote Jobs"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Remote Jobs">
              Remote Jobs
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>24</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Internship Jobs"
                name="Employment Type"
                value="Internship Jobs"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Internship Jobs">
              Internship Jobs
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>27</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Contract"
                name="Employment Type"
                value="Contract"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Contract">
              Contract
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>76</AccordionMenuItemBadg>
          </AccordionMenuItem>

          <AccordionMenuItem>
            <AccordionMenuItemIcon>
              <CustomCheck
                id="Training Jobs"
                name="Employment Type"
                value="Training Jobs"
              />
            </AccordionMenuItemIcon>
            <AccordionMenuItemText htmlFor="Training Jobs">
              Training Jobs
            </AccordionMenuItemText>
            <AccordionMenuItemBadg>28</AccordionMenuItemBadg>
          </AccordionMenuItem>
        </AccordionMenu>
      </AccordionWrapper>
    </AccordionOuter>
  );
};

export default EmploymentType;
