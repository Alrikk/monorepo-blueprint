import winston from 'winston';
import { getEnv } from './env';

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const colors: winston.config.AbstractConfigSetColors = {
  debug: 'white',
  info: 'green',
  warn: 'yellow',
  error: 'red',
};

function level(): string {
  const levelInt = levels[getEnv<LogLevel>('LOG_LEVEL', 'INFO').toLowerCase()] ?? levels.info;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const level = Object.keys(levels).find((key) => levels[key] === levelInt) as string;
  return level;
}

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.errors({ stack: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transports: Array<any> = [new winston.transports.Console()];

const Logger: winston.Logger = winston.createLogger({
  level: level(),
  format,
  transports,
});

export default Logger;
