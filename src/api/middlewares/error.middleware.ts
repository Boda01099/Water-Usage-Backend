import { Request, Response, NextFunction } from 'express';
import logger from '../../utils/logger.js';

interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

const errorMiddleware = (
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  logger.error(`[Error] Error Message: ${message} | StatusCode: ${statusCode}`);

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;
