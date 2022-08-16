import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("home page of the app is opened", () => {});

    when("user hasn’t selected a particular event", () => {
      AppWrapper = mount(<App />);
    });

    then("event details will collapse", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-summary")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then
  }) => {
    given("user wants to get more info about an event", () => {
      AppWrapper = mount(<App />);
    });

    when("user clicks on the selected event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .event-details-btn").at(0).simulate("click");
    });

    then("details for that chosen even expand out", () => {
      expect(AppWrapper.find(".event .event-title")).toHaveLength(2);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then
  }) => {
    given("user wants to hide info about a chosen event", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".event .event-details-btn").at(0).simulate("click");
    });

    when("user clicks on the selected event expanded details", () => {
      AppWrapper.update();
      AppWrapper.find(".event .event-details-btn").at(0).simulate("click");
    });

    then("the details collapse", () => {
      expect(AppWrapper.find(".event .event-summary")).toHaveLength(0);
    });
  });
});
