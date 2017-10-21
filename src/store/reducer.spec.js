import reducer from "./reducer";
import { jediReceived } from "./action";

const testJedi = [
  { id: 1, name: "Stan" },
  { id: 2, name: "Kenny" },
  { id: 3, name: "Kyle" },
  { id: 4, name: "Cartman" },
];

it("should init the state properly", () => {
  const actual = reducer(undefined, {});
  const expected = { map: {}, all: [] };

  expect(actual).toEqual(expected);
});

it("should build a map of jedi on JEDI_RECEIVED", () => {
  const action = jediReceived(testJedi);
  const actual = reducer(undefined, action);

  const expectedMap = {
    1: { id: 1, name: "Stan" },
    2: { id: 2, name: "Kenny" },
    3: { id: 3, name: "Kyle" },
    4: { id: 4, name: "Cartman" },
  };

  expect(actual.map).toEqual(expectedMap);
});

it("should build a list of jedi ids on JEDI_RECEIVED", () => {
  const action = jediReceived(testJedi);
  const actual = reducer(undefined, action);
  const expectedList = [1, 2, 3, 4];

  expect(actual.all).toEqual(expectedList);
});
