import userRouter from "./user.routes.js";

export default (app) => {
  app.use("/api/user", userRouter);
};
