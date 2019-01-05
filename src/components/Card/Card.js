import React from "react";
import styled from "styled-components";

const CardBase = styled.div`
  border: 1px solid rgba(14, 46, 71, 0.11);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 4px 32px 4px rgba(45, 12, 120, 0.07);
  padding: 16px;
  display: inline-flex;
  position: relative;
  width: max-content;
  margin: 8px;
`;

const Card = props => {
  return <CardBase>{props.children}</CardBase>;
};

export default Card;
