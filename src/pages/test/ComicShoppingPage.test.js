import { render, screen, waitFor } from "@testing-library/react";
import ComicShoppingPage from "../ComicShoppingPage";

import { initialState } from "../../store/comics";
import RenderNormalized from "../../test-utils/testing-library-utils";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("show spinner img with no cart", async () => {
  act(() => {
    render(
      <RenderNormalized initialState={initialState}>
        <ComicShoppingPage />
      </RenderNormalized>,
      { wrapper: MemoryRouter }
    );
  });

  await waitFor(() => {
    const imgSpinner = screen.getByRole("img");
    expect(imgSpinner).not.toBeInTheDocument();
  });
});
