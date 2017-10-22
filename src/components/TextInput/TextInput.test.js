import React from "react";
import TextInput from "./index";
import { shallow } from "enzyme";

it("should render properly", () => {
  const wrapper = shallow(<TextInput />);
  expect(wrapper).toMatchSnapshot();
});
