import { ParseBaseClass } from '../class/baseClasses';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IParseServerAPICred {
  serverURL: string;
  appId: string;
  javascriptKey: string;
}

export interface SubClass {
  className: string;
  class: ParseBaseClass;
}

class ParseInitialize {
  initialized = false;
  constructor(config: IParseServerAPICred, subClasses?: SubClass[]) {
    this.initialize(config, subClasses);
  }
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    if (subClasses) {
      this.registerParseSubClasses(subClasses);
    }
    Parse.serverURL = config.serverURL;
    Parse.initialize(config.appId, config.javascriptKey);
    this.initialized = true;
  }
  registerParseSubClasses(subClasses: SubClass[]) {
    subClasses.forEach((subClass) =>
      Parse.Object.registerSubclass(subClass.className, subClass.class)
    );
  }
}

export class ParseInitializeRN extends ParseInitialize {
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    //allow objects from the parse server to be cached locally
    //React Native
    // const {AsyncStorage} = require('@react-native-async-storage/async-storage');
    super.initialize(config, subClasses);
    Parse.setAsyncStorage(AsyncStorage);
    Parse.enableLocalDatastore();
  }
}

export class ParseInitializeNode extends ParseInitialize {
  protected initialize(config: IParseServerAPICred, subClasses?: SubClass[]) {
    super.initialize(config, subClasses);
  }
}
