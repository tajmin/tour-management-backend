import { Request, Response } from "express";
import httpStatus from "http-status-codes";

const routeNotFoundHandler = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route Not Found",
  });
};

export default routeNotFoundHandler;
