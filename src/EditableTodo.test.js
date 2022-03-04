import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("editable todo", function () {
  it("renders without crashing", function () {
    const testTodo = { title: "test", description: "testing", priority: 1 };

    render(<EditableTodo todo={testTodo} />);
  });

  it("contains expected title", function () {
    const testTodo = { title: "test", description: "testing", priority: 1 };

    const result = render(<EditableTodo todo={testTodo} />);
    expect(result.queryByText("test")).toBeInTheDocument();
  });


});