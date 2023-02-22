import { getEnv } from './env';
import { LogLevel } from './logger';

interface Config {
  logLevel: LogLevel;
  port: number;
}
export function getConfig(): Config {
  return {
    logLevel: getEnv<LogLevel>('LOG_LEVEL', 'INFO'),
    port: getEnv('PORT', 8080),
  };
}
