import { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "inline" : "none")};
`;

const StyledInput = styled.div`

  &:hover ${StyledButton} {
    display: inline;
  }
`;

const StyledDisplay = styled.span<{ weight?: string }>`
  font-weight: ${(props) => props.weight};
`;

const StyledInputElement = styled.input`
  border-width: 0.1px;
  font-size: inherit;
`;

export default class Input extends Component<
  { initialInputDisplayText: string; weight?: string },
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
          <StyledDisplay weight={this.props.weight}>
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
