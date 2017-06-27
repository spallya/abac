import fs from 'fs'

let object = {};

class ABAC {
  constructor() {}

  loadConfiguration(configFileName, configFilePath, configType) {
    let completePath = `${configFilePath}/${configFileName}`;
    let abc;
    try {
      abc = require(completePath);
    } catch (e) {
      throw e;
    }
    object[configType] = abc;
    console.log(JSON.stringify(object, null, 2));
    return this;
  }
}

export default ABAC;
