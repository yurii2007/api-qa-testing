import { NextFunction, Request, Response } from "express";

const ctrlWrapper = (controller: (req: Request, res: Response) => Promise<void>) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
