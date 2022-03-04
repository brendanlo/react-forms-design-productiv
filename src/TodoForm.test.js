import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  // Why not querySelector?
  it("contains expected title", function () {
    const result = render(<TodoForm />);
    expect(result.querySelector('input[name="title"]').getAttribute('value')).toEqual("");
  });

//   it("Snapshot", function () {
//     const result = render(<TodoForm />);
//     expect(result).toMatchSnapshot();
//   })

  
});