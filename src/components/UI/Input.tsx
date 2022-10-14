import { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "inline" : "none")};
`;

const StyledInput = styled.div`
  width: ${(props) => props.inputMode};
  &:hover ${StyledButton} {
    display: inline;
  }
`;

const StyledDisplay = styled.span<{
  weight?: string;
  displayStyle?: string;
}>`
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.displayStyle};
`;

const StyledInputElement = styled.textarea<{
  inputWidth?: number;
}>`
  border-width: 0.1px;
  font-size: inherit;
  width: ${(props) => props.inputWidth}%;
  height: min-content;
`;

export default class Input extends Component<
  {
    initialInputDisplayText: string;
    weight?: string;
    displayStyle?: string;
    inputWidth?: number;
  },
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
    this.setState({ clicked: !this.state.clicked });
  };

  //type of event - React.FormEvent
  updateValueHandler = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({ inputDisplayText: e.currentTarget.value });
  };

  render() {
    return (
      <StyledInput>
        {this.state.clicked ? (
          <StyledInputElement
            value={this.state.inputDisplayText}
            onChange={this.updateValueHandler}
            inputWidth={this.props.inputWidth}
          />
        ) : (
          <StyledDisplay
            weight={this.props.weight}
            displayStyle={this.props.displayStyle}
          >
            {this.state.inputDisplayText}
          </StyledDisplay>
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
