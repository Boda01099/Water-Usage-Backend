import winston from "winston";
const { combine, timestamp, printf, errors } = winston.format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return stack
        ? `${timestamp} [${level}]: ${message} - ${stack}`
        : `${timestamp} [${level}]: ${message}`;
});
const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), logFormat),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), logFormat),
        }),
        new winston.transports.File({
            filename: "logs/app.log",
            format: winston.format.combine(winston.format.json(), logFormat),
        }),
    ],
});
export default logger;
