import authRouter from "./auth.route.js";
import userRouter from "./user.routes.js";

export default (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
};
