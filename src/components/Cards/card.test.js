import React from "react";
import { render as testRender } from "react-dom";
import Card from "../card";

it("should match the snapshot", () => {
  const fakeLaunchData = {
    flight_number: "1",
    mission_name: "test name",
    mission_id: ["123"],
    launch_success: true,
    launch_date_local: "2020-08-24T15:59:15.582Z",
    rocket: {
      first_stage: {
        cores: [{ land_success: false }],
      },
    },
    links: {
      mission_patch_small: "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
    },
  };

  const cardTree = <Card event={fakeLaunchData} />;
  expect(cardTree).toMatchSnapshot();
});
