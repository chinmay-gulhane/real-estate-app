import authRouter from "./auth.route.js";
import userRouter from "./user.routes.js";
import listingRouter from "./listing.route.js";

export default (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/listing", listingRouter);

  // middleware for auth
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
};
