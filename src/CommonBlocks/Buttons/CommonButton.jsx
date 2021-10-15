import React from "react";
import "./styles.css";
import styled from "styled-components";

const commonButton = styled.button`
  background-color: #3949ab;
  color: white;
`;

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <commonButton onClick={onClick} type={type}>
      {children}
    </commonButton>
  );
};

export default Button;
