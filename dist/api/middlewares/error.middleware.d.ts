import { Request, Response, NextFunction } from 'express';
interface ErrorWithStatusCode extends Error {
    statusCode?: number;
}
declare const errorMiddleware: (err: ErrorWithStatusCode, req: Request, res: Response, next: NextFunction) => void;
export default errorMiddleware;
