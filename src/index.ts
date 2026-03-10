import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { apiRoutes } from "./routes";

const app = new Elysia()
  .use(
    openapi({
      documentation: {
        info: {
          version: "v1",
          title: "Bun with Elysia backend",
          description:
            "Using Bun and Elysia, Developing a fast and type safe scalable backend",
        },
      },
    }),
  )
  .get("/", () => "Hello Elysia", {
    detail: {
      hide: true,
    },
  })
  .group("/api/v1", (app) => app.use(apiRoutes))
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
