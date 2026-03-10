import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { apiRoutes } from "./routes";

const app = new Elysia()
  .use(openapi())
  .get("/", () => "Hello Elysia")
  .group("/api/v1", (app) => app.use(apiRoutes))
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
