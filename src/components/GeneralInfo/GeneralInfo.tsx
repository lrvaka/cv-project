import { Component } from "react";
import Input from "../UI/Input";

export default class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <Input initialInputDisplayText="Enter Name" />
      </div>
    );
  }
}
