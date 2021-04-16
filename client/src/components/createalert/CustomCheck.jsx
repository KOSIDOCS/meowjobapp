import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../screenquery/theme";

const CustomCheck = ({ id, name, value }) => {
  return (
    <Label>
      <input type="checkbox" id={id} name={name} value={value} />
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    </Label>
  );
};

const Bounce = keyframes`
   50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
`;

const Label = styled.label`
  --border: #d1d6ee;
  --border-hover: #bbc1e1;
  --border-active: #1e2235;
  --tick: #fff;
  --background-color: #0f47c5;
  position: relative;
  --stroke: var(--tick);
  input,
  svg {
    width: 21px;
    height: 21px;
    display: block;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: ${theme.dark};
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow 0.3s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));

    &:hover {
      --s: 2px;
      --b: var(--border-hover);
    }
    &:checked {
      --b: var(--background-color);
      --s: 11px;
      & + svg {
        animation: ${Bounce} 0.4s linear forwards 0.2s;
      }
    }
  }
  svg {
    --scale: 0;
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--stroke, var(--border-active));
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    transform: scale(var(--scale, 1)) translateZ(0);
  }
`;

export default CustomCheck;
