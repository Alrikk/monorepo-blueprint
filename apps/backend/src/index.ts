import { getApp } from './server';
import { getConfig } from './utils/config';
import Logger from './utils/logger';

async function bootstrap() {
  const port = getConfig().port;
  const app = getApp();

  app.listen(port, () => {
    Logger.info(`Listening on http://localhost:${port}`);
  });
}

bootstrap();
