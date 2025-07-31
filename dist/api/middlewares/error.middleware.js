import logger from '../../utils/logger.js';
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    logger.error(`[Error] Error Message: ${message} | StatusCode: ${statusCode}`);
    res.status(statusCode).json({
        success: false,
        message,
    });
};
export default errorMiddleware;
