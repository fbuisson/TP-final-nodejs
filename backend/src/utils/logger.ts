import { createLogger, format, transports } from "winston";
const logger = createLogger({
  level: "warn",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "DD/MM/YYYY HH:mm:ss" }),
    format.printf(({ level, message, timestamp }) => {
      return `${level}, ${message}, ${timestamp}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/warn.log", level: "warn" }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

export default logger;
