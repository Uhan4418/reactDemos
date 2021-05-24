import React from "react";
import "react-virtualized/styles.css"; // only needs to be imported once
import faker from "faker";
import Demo from "./component/index";

// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
  name: faker.name.findName(),
  description: faker.name.jobTitle(),
  location: faker.address.city()
}));

const RenderDom = () => <Demo list={list} />

export default RenderDom