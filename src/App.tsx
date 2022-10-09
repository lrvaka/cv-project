import { Component } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";

export default class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <div>Education Section</div>
        <div>Work Experience Section</div>
      </div>
    );
  }
}
