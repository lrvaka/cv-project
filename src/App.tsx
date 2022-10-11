import { Component } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import styled from "styled-components";
import EducationSection from "./components/EducationSection/EducationSection";
import WorkSection from "./components/WorkSection/WorkSection";

const StyledApp = styled.div`
  margin: 2rem auto;
  max-width: 900px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <GeneralInfo />
        <EducationSection />
        <WorkSection />
      </StyledApp>
    );
  }
}
