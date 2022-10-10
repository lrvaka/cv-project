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
          <Input initialInputDisplayText="Enter Name" />
        </StyledTopSection>
        <StyledBottomSection>
          <Input initialInputDisplayText="Enter Location" />
          <Input initialInputDisplayText="Enter Phone" />
          <Input initialInputDisplayText="Enter Email" />
          <Input initialInputDisplayText="Enter Website" />
        </StyledBottomSection>
      </StyledSection>
    );
  }
}
