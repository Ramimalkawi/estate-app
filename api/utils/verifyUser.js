import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access - token;

  if (!token) return next(errorHandler(401, "Access denied"));

  jwt.verify(token, process.env.JWT_Secret, (error, user) => {
    if (error) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
