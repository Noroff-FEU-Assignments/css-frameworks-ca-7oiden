import styled from "styled-components";

const MainHeading = styled.h1`
  font-family: ${(props) => props.theme.fontMainHeadings};
  font-size: 2.125rem;
  color: ${(props) => props.theme.colorPrimary};
  margin-top: 50px;
  padding-bottom: 25px;
`;

export default MainHeading;
