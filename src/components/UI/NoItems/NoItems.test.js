import { render, screen } from "@testing-library/react";
import NoItemsCart from "./NoItemsCart";

test("Shows (No Comic Message) on screen", () => {
  render(<NoItemsCart />);
  const noComicsOnCart = screen.getByText("No Comics on Cart");

  expect(noComicsOnCart).toBeInTheDocument();
});

test("show no items cart icon on screen", async () => {
  render(<NoItemsCart />);
  //screen.debug();
  const cartIcon = await screen.findByRole("icon", { name: "cart-outline" });
  expect(cartIcon).toBeInTheDocument();
});
