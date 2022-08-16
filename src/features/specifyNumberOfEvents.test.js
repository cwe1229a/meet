import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then
  }) => {
    given("user hasn't given a preference on number of events", () => {});

    let AppWrapper;
    when("user is on the app", () => {
      AppWrapper = mount(<App />);
    });

    then("32 events are displayed by default", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then
  }) => {
    let AppWrapper;
    given("user wants a certain number of events to see", () => {
      AppWrapper = mount(<App />);
    });

    when("user is on the app", () => {
      AppWrapper.update();
      AppWrapper.find("#render-number").simulate("change", { target: 1 });
    });

    then("user specified number of events display", () => {
      expect(AppWrapper.find(".EventList")).toHaveLength(1);
    });
  });
});
