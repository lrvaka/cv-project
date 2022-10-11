import { Component } from "react";
import Input from "../UI/Input";
import styled from "styled-components";

const StyledSection = styled.div``;

const StyledTopSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const StyledBottomSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default class GeneralInfo extends Component {
  render() {
    return (
      <StyledSection>
        <StyledTopSection>
          <Input initialInputDisplayText="Luke Vakasisikakala" />
        </StyledTopSection>
        <StyledBottomSection>
          <Input initialInputDisplayText="New York, NY" />
          <Input initialInputDisplayText="347-818-4413" />
          <Input initialInputDisplayText="lukevakasisikakala@gmail.com" />
          <Input initialInputDisplayText="lrvaka.com" />
        </StyledBottomSection>
      </StyledSection>
    );
  }
}
