import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });

  it("renders the Top Todo section", function () {
    const result = render(<App />);
    expect(result.queryByText("Top Todo")).toBeInTheDocument();
  })

  it("renders the footer", function () {
    const result = render(<App />);
    expect(result.queryByText("Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc.")).toBeInTheDocument();
  })

  // TODO put in snapshot test once part 3 is done
});

