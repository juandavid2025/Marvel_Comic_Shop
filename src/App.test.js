import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<h1>Hello</h1>);

  const textElement = screen.getByText(/Hello/i);

  expect(textElement).toBeInTheDocument();
});
