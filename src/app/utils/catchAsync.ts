import { NextFunction, Request, Response } from "express";

type AsyncFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

/*
 * receiving a func as param
 * returning a func
 * Higher order func
 */
export const catchAsync =
  (fn: AsyncFunctionType) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err: any) => {
      next(err);
    });
  };
