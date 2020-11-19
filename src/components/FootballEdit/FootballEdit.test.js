import React from "react";
import { render } from "@testing-library/react";
import FootballEdit from "./FootballEdit";

describe("FootballEdit tests", () => {
  it("should render", () => {
    expect(render(<FootballEdit />)).toBeTruthy();
  });
});
