import { Component } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import styled from "styled-components";
import EducationInfo from "./components/EducationInfo/EducationInfo";

const StyledApp = styled.div`
  margin: 5rem auto;
  max-width: 816px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <GeneralInfo />
        <EducationInfo />
        <div>Work Experience Section</div>
      </StyledApp>
    );
  }
}
