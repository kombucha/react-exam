import React from "react";
import Create from "./Create";
import { shallow } from "enzyme";

it("should render properly", () => {
  const createJedi = jest.fn();
  const history = {};
  const wrapper = shallow(<Create createJedi={createJedi} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

it("should redirect to home after creation", () => {
  let jediCreationPromise;
  const createJedi = jest.fn(jedi => {
    jediCreationPromise = Promise.resolve(jedi);
    return jediCreationPromise;
  });
  const history = { push: jest.fn() };
  // See https://github.com/airbnb/enzyme/issues/308
  const fakeSubmitEvent = { preventDefault() {} };

  const wrapper = shallow(<Create createJedi={createJedi} history={history} />);
  wrapper.find("form").simulate("submit", fakeSubmitEvent);

  return jediCreationPromise.then(() => {
    expect(createJedi).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalled();
  });
});
