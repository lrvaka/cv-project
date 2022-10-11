import { Component } from "react";
import styled from "styled-components";
import uniqid from "uniqid";

import Section from "../UI/Section";

import EducationSectionItem from "./EducationSectionItem";

export default class EducationSection extends Component<
  {},
  {
    educationItemList: {
      school: string;
      location: string;
      degree: string;
      date: string;
      id: string;
    }[];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      educationItemList: [
        {
          school: "Saint Bonaventure University",
          location: "Olean, NY",
          degree: "B.Sc Computer Science",
          date: "August 2017 - December 2020",
          id: uniqid(),
        },
      ],
    };
  }

  addEducationItemHandler = () => {
    this.setState((prevState) => {
      return {
        educationItemList: [
          ...prevState.educationItemList,
          {
            school: "Saint Bonaventure University",
            location: "Olean, NY",
            degree: "B.Sc Computer Science",
            date: "August 2017 - December 2020",
            id: uniqid(),
          },
        ],
      };
    });
  };

  removeEducationItemHandler = () => {
    this.setState((prevState) => {
      const newArray = prevState.educationItemList;
      newArray.pop();
      return {
        educationItemList: [...newArray],
      };
    });
  };

  render() {
    return (
      //hover over section, add another education block
      <Section
        heading="Education"
        addItem={this.addEducationItemHandler}
        removeItem={this.removeEducationItemHandler}
      >
        {this.state.educationItemList.map((e) => (
          <EducationSectionItem
            school={e.school}
            location={e.location}
            degree={e.degree}
            date={e.date}
            key={e.id}
          />
        ))}
      </Section>
    );
  }
}
