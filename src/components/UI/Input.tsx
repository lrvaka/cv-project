import { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "none" : "inline")};
`;

const StyledInput = styled.div`
  font-size: 2rem;
  &:hover ${StyledButton} {
    display: inline;
  }
`;

const StyledDisplay = styled.span``;

const StyledInputElement = styled.input``;

export default class Input extends Component<
  { initialInputDisplayText: string },
  { clicked: boolean; inputDisplayText: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked: false,
      inputDisplayText: "text",
    };
  }

  componentDidMount() {
    this.setState({ inputDisplayText: this.props.initialInputDisplayText });
  }

  changeInputTypeHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  //type of e - React.FormEvent
  updateValueHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ inputDisplayText: e.currentTarget.value });
  };

  render() {
    return (
      <StyledInput>
        {this.state.clicked ? (
          <StyledDisplay>{this.state.inputDisplayText}</StyledDisplay>
        ) : (
          <StyledInputElement
            value={this.state.inputDisplayText}
            onChange={this.updateValueHandler}
          />
        )}

        <StyledButton
          clicked={this.state.clicked}
          onClick={this.changeInputTypeHandler}
        >
          {this.state.clicked ? "Edit" : "Confirm"}
        </StyledButton>
      </StyledInput>
    );
  }
}
