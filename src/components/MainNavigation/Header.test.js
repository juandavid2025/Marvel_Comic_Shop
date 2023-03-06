import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { initialState } from "../../store/comics";
import RenderNormalized from "../../test-utils/testing-library-utils";
import { MemoryRouter } from "react-router-dom";

test("Links shown on header", () => {
  render(
    <RenderNormalized initialState={initialState}>
      <Header />
    </RenderNormalized>,
    { wrapper: MemoryRouter }
  );

  const headerLinks = screen.getAllByRole("link");

  expect(headerLinks).toHaveLength(2);
});
