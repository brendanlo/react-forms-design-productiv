import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("normal todo", function () {

  const testTodo = { title: "test", description: "testing", priority: 1 };

  it("renders without crashing", function () {
    render(<Todo todo={testTodo} />);
  });

  it("contains expected todo info", function () {
    const result = render(<Todo todo={testTodo} />);
    expect(result.queryByText("test")).toBeInTheDocument();
    expect(result.queryByText("testing")).toBeInTheDocument();
    expect(result.queryByText("(priority: 1)")).toBeInTheDocument();

    // bc this isn't an editable todo, should not see any edit functionality
    expect(result.queryByText("Edit")).not.toBeInTheDocument();
    expect(result.queryByText("Del")).not.toBeInTheDocument();
  });

  it("Snapshot", function () {
    const result = render(<Todo todo={testTodo} />);
    expect(result).toMatchSnapshot();
  })
});

