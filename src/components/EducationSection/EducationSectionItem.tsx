import { Component } from "react";
import styled from "styled-components";
import Input from "../UI/Input";

const StyledItemSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledEducationSectionItem = styled.div`
  margin-bottom: 1rem;
`;

export default class EducationSectionItem extends Component<
  { school: string; location: string; degree: string; date: string },
  {}
> {
  render() {
    return (
      <StyledEducationSectionItem>
        <StyledItemSection>
          <Input weight="bold" initialInputDisplayText={this.props.school} />
          <Input initialInputDisplayText={this.props.location} />
        </StyledItemSection>
        <StyledItemSection>
          <Input initialInputDisplayText={this.props.degree} />
          <Input initialInputDisplayText={this.props.date} />
        </StyledItemSection>
      </StyledEducationSectionItem>
    );
  }
}
