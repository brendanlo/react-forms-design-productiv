import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("editable todo", function () {

  const testTodo = { title: "test", description: "testing", priority: 1 };

  it("renders without crashing", function () {
    render(<EditableTodo todo={testTodo} />);
  });

  it("contains expected title", function () {
    const result = render(<EditableTodo todo={testTodo} />);
    expect(result.queryByText("test")).toBeInTheDocument();
    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Del")).toBeInTheDocument();
  });

  it("Snapshot", function () {
    const result = render(<EditableTodo todo = {testTodo} />);
    expect(result).toMatchSnapshot();
  })
});

