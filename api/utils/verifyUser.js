import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("TOKEN", token);
  if (!token) {
    next(errorHandler(401, "Access denied"));
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    console.log("user", user);
    if (error) {
      next(errorHandler(403, "Forbidden"));
      console.log(error);
      return;
    }
    req.user = user;
    next();
  });
};
