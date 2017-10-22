import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";

const testJediList = [
  {
    id: 0,
    name: "Mace Windu",
  },
  {
    id: 1,
    name: "Yoda",
  },
];

it("should render properly", () => {
  const fetchJedi = jest.fn();
  const wrapper = shallow(<Home jedi={testJediList} fetchJedi={fetchJedi} isLoading={false} />);

  expect(wrapper).toMatchSnapshot();
});

it("should render properly when loading", () => {
  const fetchJedi = jest.fn();
  const wrapper = shallow(<Home jedi={testJediList} fetchJedi={fetchJedi} isLoading />);

  expect(wrapper).toMatchSnapshot();
});

it("should fetch jedi on mount", () => {
  const fetchJedi = jest.fn();

  shallow(<Home jedi={testJediList} fetchJedi={fetchJedi} isLoading={false} />);

  expect(fetchJedi).toHaveBeenCalled();
});
