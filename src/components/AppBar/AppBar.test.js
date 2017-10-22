import React from "react";
import AppBar from "./index";
import { shallow } from "enzyme";

it("should render properly", () => {
  const wrapper = shallow(<AppBar title="Oh hai" />);
  expect(wrapper).toMatchSnapshot();
});
