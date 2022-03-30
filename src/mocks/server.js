import { setupServer } from "msw/node";
import { handlers } from "./handlers";

//configure
export const server = setupServer(...handlers);
