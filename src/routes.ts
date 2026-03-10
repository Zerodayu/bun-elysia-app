import { Elysia } from "elysia";
import { userRoutes } from "./users/controller";

export const apiRoutes = new Elysia().use(userRoutes);
// .use(sampleRoutes);
