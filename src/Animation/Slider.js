import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Slide = styled.div``;

const Slider = ({ images = [], ...props }) => {
  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <Slide key={index}></Slide>
      ))}
    </Wrapper>
  );
};

export default Slider;
