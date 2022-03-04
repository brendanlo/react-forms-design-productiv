import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

describe("editable todo list", function () {

  const testTodoList = [{   id: 1,
                            title: "test1", 
                            description: "testing1", 
                            priority: 1 },
                        {   id: 2,
                            title: "test2",
                            description: "testing2",
                            priority: 2 }
                        ];

  it("renders without crashing", function () {
    render(<EditableTodoList todos={testTodoList} />);
  });

  it("contains all todos", function () {
    const result = render(<EditableTodoList todos={testTodoList} />);
    expect(result.queryByText("test1")).toBeInTheDocument();
    expect(result.queryByText("test2")).toBeInTheDocument();
    expect(result.queryByText("testing2")).toBeInTheDocument();
  });

  it("Snapshot", function () {
    const result = render(<EditableTodoList todos = {testTodoList} />);
    expect(result).toMatchSnapshot();
  })
});
