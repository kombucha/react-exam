import React from "react";
import Jedi from "./Jedi";
import { shallow } from "enzyme";

const testJedi = {
  id: 0,
  name: "Mace Windu",
};

it("should render properly", () => {
  const wrapper = shallow(<Jedi jedi={testJedi} />);
  expect(wrapper).toMatchSnapshot();
});
