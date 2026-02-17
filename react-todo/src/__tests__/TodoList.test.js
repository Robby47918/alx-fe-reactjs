import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test new todo" } });
  fireEvent.click(button);

  expect(screen.getByText("Test new todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  // Initially not completed
  expect(todo).toHaveStyle("text-decoration: none");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = todo.querySelector("button");

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
