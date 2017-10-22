import React from "react";
import JediList from "./index";
import { shallow, mount } from "enzyme";

it("should render properly", () => {
  const wrapper = shallow(<JediList list={[]} />);
  expect(wrapper).toMatchSnapshot();
});

it("should render all jedi", () => {
  const jediList = [{ id: 0, name: "Pug" }, { id: 1, name: "Jose" }];
  const wrapper = mount(<JediList list={jediList} />);
  expect(wrapper.find(".JediList__item").length).toEqual(jediList.length);
});
