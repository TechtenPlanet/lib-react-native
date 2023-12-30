import { logger as RNLogger, consoleTransport } from 'react-native-logs';

// import { Analytics } from "lib_actions/analytics";

const Toast = __DEV__
  ? // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('react-native-toast-message').default
  : undefined;
// import RNFS from "react-native-fs";

const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
class Logger {
  static logger;

  constructor() {
    if (!Logger.logger) {
      this.setupLogger();
    }
  }
  setupLogger = () => {
    const defaultConfig = {
      severity: 'debug',
      transport: (props) => {
        consoleTransport(props);
        // fileAsyncTransport(props);
      },
      transportOptions: {
        // FS: RNFS,
        colors: 'ansi',
        fileLogName: `logs_${date}-${month}-${year}`,
      },
      levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
      },
    };
    //TODO: Debug
    Logger.logger = RNLogger.createLogger(defaultConfig);
  };

  log = (msg) => {
    Logger.logger.info(msg);
  };
  error = (err) => {
    // AKAnalytics.error(err);
    Logger.logger.error(err);
    Toast.show({
      type: 'error',
      text1: err,
    });
  };
  parseError = (err, msg = '') => {
    // AKAnalytics.parseError(err);
    let { message } = err;
    const { code } = err;
    if (!code) {
      message = err;
    }
    this.error(`Error: ${code} | ${message} | ${msg}`);
  };
  warn = (warn) => {
    Logger.logger.warn(warn);
  };
}

export const displayMsg = (message) => {
  Toast.show({
    type: 'info',
    text1: message,
  });
};

export const displayError = (error) => {
  Toast.show({
    type: 'error',
    text1: error,
  });
};

export const logger = new Logger();
export default logger;
