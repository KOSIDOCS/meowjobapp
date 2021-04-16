import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import loading from "../../images/loading.png";
import styled from "styled-components";

/* https://via.placeholder.com/100x100?text=Loading */
const Image = ({ src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible(true);
  };

  return (
    <Fragment>
      <Img
        src={loading}
        alt={alt}
        style={{ display: isVisible ? "none" : "inline" }}
        {...props}
      />

      <Img
        src={src}
        alt={alt}
        onLoad={changeVisibility}
        style={{ display: isVisible ? "inline" : "none" }}
        {...props}
      />
    </Fragment>
  );
};

const Img = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 4px;
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
