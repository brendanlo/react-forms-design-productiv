import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });

  it("contains expected title", function () {
    const result = render(<Footer />);
    expect(result.queryByText("Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc.")).toBeInTheDocument();
  });

  it("Snapshot", function () {
    const result = render(<Footer />);
    expect(result).toMatchSnapshot();
  })

  
});