import { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "inline" : "none")};
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  &:hover ${StyledButton} {
    display: inline;
  }
`;

const StyledDisplay = styled.span``;

const StyledInputElement = styled.input`
  font-size: inherit;
  width: 50%;
`;

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

  //set initial state to incoming prop - not optional
  componentDidMount() {
    this.setState({ inputDisplayText: this.props.initialInputDisplayText });
  }

  // use arrow methods for lexical binding
  changeInputTypeHandler = () => {
    // Prevents inputDisplayText from being empty
    if (this.state.inputDisplayText === "") {
      this.setState({ inputDisplayText: this.props.initialInputDisplayText });
    }
    this.setState({ clicked: !this.state.clicked });
  };

  //type of event - React.FormEvent
  updateValueHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ inputDisplayText: e.currentTarget.value });
  };

  render() {
    return (
      <StyledInput>
        {this.state.clicked ? (
          <StyledInputElement
            value={this.state.inputDisplayText}
            onChange={this.updateValueHandler}
          />
        ) : (
          <StyledDisplay>{this.state.inputDisplayText}</StyledDisplay>
        )}

        <StyledButton
          clicked={this.state.clicked}
          onClick={this.changeInputTypeHandler}
        >
          {this.state.clicked ? "Confirm" : "Edit"}
        </StyledButton>
      </StyledInput>
    );
  }
}
