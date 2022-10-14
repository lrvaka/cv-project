import { Component } from "react";
import styled from "styled-components";
import Input from "../UI/Input";

const StyledItemSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledItemDetailsButtons = styled.div`
  display: none;
  justify-content: space-between;
`;

const StyledItemDetails = styled.ol`
  list-style: square;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.25rem;
`;

const StyledWorkSectionItem = styled.div`
  margin-bottom: 1rem;
  &:hover ${StyledItemDetailsButtons} {
    display: flex;
  }
`;

export default class WorkSectionItem extends Component<
  {
    company: string;
    location: string;
    title: string;
    date: string;
    tasks: { id: string; task: string }[];
    id: string;
    removeTask: (id: string) => void;
    addTask: (id: string) => void;
  },
  {}
> {
  render() {
    return (
      <StyledWorkSectionItem>
        <StyledItemSection>
          <Input weight="bold" initialInputDisplayText={this.props.company} />
          <Input initialInputDisplayText={this.props.location} />
        </StyledItemSection>
        <StyledItemSection>
          <Input
            displayStyle="italic"
            initialInputDisplayText={this.props.title}
          />
          <Input initialInputDisplayText={this.props.date} />
        </StyledItemSection>
        <StyledItemDetails>
          {this.props.tasks.map((e) => (
            <li key={e.id}>
              <Input inputWidth={100} initialInputDisplayText={e.task} />
            </li>
          ))}
          <StyledItemDetailsButtons>
            {/* we get an error if we simply pass the function directly to onClick */}
            <button onClick={() => this.props.addTask(this.props.id)}>
              Add Task Item
            </button>
            <button onClick={() => this.props.removeTask(this.props.id)}>
              Remove Previous Task Item
            </button>
          </StyledItemDetailsButtons>
        </StyledItemDetails>
      </StyledWorkSectionItem>
    );
  }
}
