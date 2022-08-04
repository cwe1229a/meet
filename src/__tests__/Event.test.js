import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render title in the event item", () => {
    expect(EventWrapper.find(".event-title")).toHaveLength(1);
  });

  test("render information in the event item", () => {
    expect(EventWrapper.find(".event-info")).toHaveLength(1);
  });

  test("render location in the event item", () => {
    expect(EventWrapper.find(".event-location")).toHaveLength(1);
  });

  test("render details of event with button", () => {
    expect(EventWrapper.find(".event-details-btn")).toHaveLength(1);
  });

  test("render date in the event item", () => {
    expect(EventWrapper.find(".event-dateTime")).toHaveLength(1);
  });
});
