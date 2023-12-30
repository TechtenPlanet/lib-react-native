import SInfo, { RNSensitiveInfoOptions } from 'react-native-sensitive-info';
import { IParseServerAPICred } from 'lib_cloud/parse';

const options: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'ParseServer-Prefs',
  keychainService: 'ParseServer-Service',
};

const PARSE_SERVER_CONFIG = {
  PARSE_SERVER_URL: 'PARSE_SERVER_URL',
  PARSE_SERVER_APPID: 'PARSE_SERVER_APPID',
  PARSE_SERVER_JAVASCRIPTKEY: 'PARSE_SERVER_JAVASCRIPTKEY',
};
export const SaveParseCredentials = async (parseConfig: IParseServerAPICred) => {
  await Promise.all([
    SInfo.setItem(PARSE_SERVER_CONFIG.PARSE_SERVER_URL, parseConfig.serverURL, options),
    SInfo.setItem(PARSE_SERVER_CONFIG.PARSE_SERVER_APPID, parseConfig.appId, options),
    SInfo.setItem(
      PARSE_SERVER_CONFIG.PARSE_SERVER_JAVASCRIPTKEY,
      parseConfig.javascriptKey,
      options
    ),
  ]).catch((err) => console.log(err));
};
export const GetParseCredentials = async () => {
  try {
    const parseConfig = {
      serverURL: await SInfo.getItem(PARSE_SERVER_CONFIG.PARSE_SERVER_URL, options),
      appId: await SInfo.getItem(PARSE_SERVER_CONFIG.PARSE_SERVER_APPID, options),
      javascriptKey: await SInfo.getItem(PARSE_SERVER_CONFIG.PARSE_SERVER_JAVASCRIPTKEY, options),
    };
    if (!parseConfig?.serverURL || !parseConfig?.appId || !parseConfig?.javascriptKey) {
      throw new Error('no saved parse config');
    }
    return parseConfig;
  } catch (err) {
    return undefined;
  }
};
