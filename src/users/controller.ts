import { Elysia } from "elysia";
import { userService } from "./service";
import { userModel } from "./model";

const service = new userService();

export const userRoutes = new Elysia({ prefix: "users" })
  // Existing route
  .get("/", () => "This is Users Route")

  // New dynamic route with validation
  .get("/:name", ({ params }) => service.greetUser(params), {
    params: userModel.getUserParams,
  });
