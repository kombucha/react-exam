import React from "react";
import Button from "./index";
import { shallow } from "enzyme";

it("should render properly", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});
