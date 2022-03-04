import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";

describe("Todo App", function () {

  const testTodoList = [{
    id: 1,
    title: "test1",
    description: "testing1",
    priority: 1
  },
  {
    id: 2,
    title: "test2",
    description: "testing2",
    priority: 2
  }


  ];
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodoList} />);
  });

  it("TodoList: shows no todos when no todos provided", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
  });

  it("TodoList: shows todos when todos provided", function () {
    const result = render(<TodoApp initialTodos={testTodoList} />);
    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();
    expect(result.queryByText("test2")).toBeInTheDocument();
    expect(result.queryByText("testing2")).toBeInTheDocument();
  });

  it("Top todo: shows no todos when no todos provided", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("No todos yet.")).toBeInTheDocument();
  });

  it("Top todo: shows a todo when todo provided", function () {
    const result = render(<TodoApp initialTodos={testTodoList} />);
    expect(result.queryByText("No todos yet")).not.toBeInTheDocument();
  });

  it("Todo Form: shows up", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("Add Nü")).toBeInTheDocument();
    expect(result.queryByText("Priority:")).toBeInTheDocument();
    expect(result.queryByText("Gø!")).toBeInTheDocument();
  });




  it("Snapshot", function () {
    const result = render(<TodoApp initialTodos={testTodoList} />);
    expect(result).toMatchSnapshot();
  })
});

