import { Component } from "react";
import styled from "styled-components";
import Section from "../UI/Section";
import WorkSectionItem from "./WorkSectionItem";
import uniqid from "uniqid";

export default class WorkSection extends Component<
  {},
  {
    workItemList: {
      company: string;
      location: string;
      title: string;
      date: string;
      tasks: { id: string; task: string }[];
      id: string;
    }[];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      workItemList: [
        {
          company: "Rakavii",
          location: "Buffalo, NY",
          title: "Web Designer Intern",
          date: "September 2020 - December 2020",
          tasks: [
            {
              id: uniqid(),
              task: "Revamped the company website for relaunch. Implemented new design ideas, built new page sections & sub-sections, setup e-commerce functionality, ensured the website followed the companies intended design identity. Designed through Wix.com.",
            },
            {
              id: uniqid(),
              task: "Completed other tasks outside work title; created posters for social media and designed new clothing using Adobe Photoshop and Illustrator.",
            },
          ],
          id: uniqid(),
        },
      ],
    };
  }

  addWorkItemHandler = () => {
    this.setState((prevState) => {
      return {
        workItemList: [
          ...prevState.workItemList,
          {
            company: "Rakavii",
            location: "Buffalo, NY",
            title: "Web Designer Intern",
            date: "September 2020 - December 2020",
            tasks: [
              {
                id: uniqid(),
                task: "Revamped the company website for relaunch. Implemented new design ideas, built new page sections & sub-sections, setup e-commerce functionality, ensured the website followed the companies intended design identity. Designed through Wix.com.",
              },
              {
                id: uniqid(),
                task: "Completed other tasks outside work title; created posters for social media and designed new clothing using Adobe Photoshop and Illustrator.",
              },
            ],
            id: uniqid(),
          },
        ],
      };
    });
  };

  removeWorkItemHandler = () => {
    this.setState((prevState) => {
      const newArray = prevState.workItemList;
      newArray.pop();
      return {
        workItemList: [...newArray],
      };
    });
  };

  removeWorkItemTaskHandler = (workItemID: string) => {
    const selected = this.state.workItemList.findIndex(
      (e) => e.id === workItemID
    );

    const newArray = this.state.workItemList;

    newArray[selected].tasks.pop();

    this.setState({
      workItemList: newArray,
    });
  };

  // SOLVED
  // We are having an issue where the tasks are switching places with each other
  //  [...prevState, selected] - this is causing the updated array to be switched
  // to the end of the array
  // Solution: find value at index, update value at that index
  addWorkItemTaskHandler = (workItemID: string) => {
    const selected = this.state.workItemList.findIndex(
      (e) => e.id === workItemID
    );

    const newArray = this.state.workItemList;

    newArray[selected].tasks.push({
      id: uniqid(),
      task: "Enter new job task info",
    });

    this.setState({
      workItemList: newArray,
    });
  };

  render() {
    return (
      <Section
        heading="Work Experience"
        addItem={this.addWorkItemHandler}
        removeItem={this.removeWorkItemHandler}
      >
        {this.state.workItemList.map((e) => (
          <WorkSectionItem
            addTask={this.addWorkItemTaskHandler}
            removeTask={this.removeWorkItemTaskHandler}
            company={e.company}
            title={e.title}
            date={e.date}
            location={e.location}
            tasks={e.tasks}
            id={e.id}
            key={e.id}
          />
        ))}
      </Section>
    );
  }
}
