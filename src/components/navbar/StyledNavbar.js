import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.colorNavbar};
  font-family: ${(props) => props.theme.MainHeadings};
  padding: 1rem 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  z-index: 100;

  @media (min-width: 992px) {
    box-shadow: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colorDarkText};
  text-decoration: none;
  padding: 0.5rem 7.5%;
  border-radius: 3px;
  margin: 0 0 1rem 0;

  @media (min-width: 992px) {
    margin: 0 0 0 2rem;
    padding: 0.25rem 1rem;
  }

  &:hover {
    color: ${(props) => props.theme.colorDarkText};
    background-color: ${(props) => props.theme.colorSecondary};
  }

  &::active {
    color: ${(props) => props.theme.colorDarkText};
    background-color: ${(props) => props.theme.colorSecondary};
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorSecondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export const StyledForm = styled(Form)`
  padding: 0 7.5% 2rem 7.5%;

  @media (min-width: 992px) {
    padding: 0 5%;
  }
`;

export const StyledFormControl = styled(FormControl)`
  background-color: ${(props) => props.theme.colorSecondary};
  min-width: 200px;
  border: none;
  border-radius: 4px 0 0 4px;
  color: red;

  &::placeholder {
    color: ${(props) => props.theme.colorLightText};
  }
`;
