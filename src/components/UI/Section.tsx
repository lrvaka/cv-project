import { Component } from "react";
import styled from "styled-components";

const SectionItemsContainer = styled.div`
  padding-left: 2rem;
  padding-top: 0.5rem;
`;

const SectionHeading = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const StyledBottomSection = styled.div`
  display: none;
  justify-content: space-between;
`;

const SectionItemAddButton = styled.button`
  align-self: flex-start;
`;

const SectionItemRemoveButton = styled.button`
  height: max-content;
`;

const StyledSection = styled.div`
  &:hover ${StyledBottomSection} {
    display: flex;
  }
`;

export default class Section extends Component<
  {
    addItem: () => void;
    removeItem: () => void;
    children?: React.ReactNode;
    heading: string;
  },
  {}
> {
  render() {
    return (
      <StyledSection>
        <SectionHeading>{this.props.heading}</SectionHeading>
        <SectionItemsContainer>{this.props.children}</SectionItemsContainer>
        <StyledBottomSection>
          <SectionItemAddButton onClick={this.props.addItem}>
            +Add
          </SectionItemAddButton>
          <SectionItemRemoveButton onClick={this.props.removeItem}>
            - Remove Previous
          </SectionItemRemoveButton>
        </StyledBottomSection>
      </StyledSection>
    );
  }
}
