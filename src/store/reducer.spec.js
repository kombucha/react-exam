import reducer, { allJedi, isLoading } from "./reducer";
import { jediReceived, jediCreated, JEDI_REQUESTED } from "./action";

const testJediList = [
  { id: 1, name: "Stan" },
  { id: 2, name: "Kenny" },
  { id: 3, name: "Kyle" },
  { id: 4, name: "Cartman" },
];

it("should init the state properly", () => {
  const actual = reducer(undefined, {});
  const expected = { map: {}, all: [], loading: false };

  expect(actual).toEqual(expected);
});

it("should build a map of jedi on JEDI_RECEIVED", () => {
  const action = jediReceived(testJediList);
  const actual = reducer(undefined, action);

  const expectedMap = {
    1: { id: 1, name: "Stan" },
    2: { id: 2, name: "Kenny" },
    3: { id: 3, name: "Kyle" },
    4: { id: 4, name: "Cartman" },
  };

  expect(actual.map).toEqual(expectedMap);
});

it("should add a jedi to the map on JEDI_CREATION_RECEIVED", () => {
  const fakeJedi = { id: 0, name: "Deckard" };
  const action = jediCreated(fakeJedi);
  const actual = reducer(undefined, action);

  const expectedMap = { [fakeJedi.id]: fakeJedi };

  expect(actual.map).toEqual(expectedMap);
});

it("should build a list of jedi ids on JEDI_RECEIVED", () => {
  const action = jediReceived(testJediList);
  const actual = reducer(undefined, action);
  const expectedList = [1, 2, 3, 4];

  expect(actual.all).toEqual(expectedList);
});

it("should add a jedi id to the list on JEDI_CREATION_RECEIVED", () => {
  const fakeJedi = { id: 0, name: "Scooby Doo" };
  const action = jediCreated(fakeJedi);
  const actual = reducer(undefined, action);

  const expectedList = [fakeJedi.id];

  expect(actual.all).toEqual(expectedList);
});

it("should not add a duplicate jedi id to the list on JEDI_CREATION_RECEIVED", () => {
  const fakeJedi = { id: 0, name: "Scooby Doo" };
  const action = jediCreated(fakeJedi);
  const actual = reducer({ all: [fakeJedi.id] }, action);

  const expectedList = [fakeJedi.id];

  expect(actual.all).toEqual(expectedList);
});

it("should set loading to true on JEDI_REQUESTED", () => {
  const actualState = reducer(undefined, { type: JEDI_REQUESTED });
  const expectedState = true;

  expect(actualState.loading).toEqual(expectedState);
});

it("should set loading to false on JEDI_RECEIVED", () => {
  const actualState = reducer(undefined, jediReceived([]));
  const expectedState = false;

  expect(actualState.loading).toEqual(expectedState);
});

describe("selectors", () => {
  it("should return an array of jedi", () => {
    const state = {
      map: {
        0: { id: 0, name: "John Wick" },
        1: { id: 1, name: "Marie Joel" },
      },
      all: [0, 1],
    };

    const actual = allJedi(state);
    const expected = [{ id: 0, name: "John Wick" }, { id: 1, name: "Marie Joel" }];

    expect(actual).toEqual(expected);
  });

  it("should return the loading state", () => {
    const state = { loading: false };
    const actual = isLoading(state);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
