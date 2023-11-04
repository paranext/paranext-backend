import logger from '@shared/services/logger.service';

/** Error that force logs the error message before throwing. Useful for debugging in some situations. */
export default class LogError extends Error {
  constructor(message?: string) {
    super(message);
    logger.error(message);
  }
}
