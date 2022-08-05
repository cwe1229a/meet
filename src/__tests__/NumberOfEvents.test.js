import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".render-number")).toHaveLength(1);
  });

  test("render default number in the input is 32", () => {
    expect(NumberOfEventsWrapper.find(".render-number").prop("value")).toBe(32);
  });

  test("render number change for events when state is changed in input field", () => {
    NumberOfEventsWrapper.setState({
      renderNumber: "32"
    });
    const eventObject = { target: { value: 6 } };
    NumberOfEventsWrapper.find(".render-number").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("renderNumber")).toBe(6);
  });
});
