let configObject = {};
let objectMap = {};

class ABAC {
  constructor() {}

  loadConfiguration(configFileName, configFilePath, configType) {
    let completePath = `${configFilePath}/${configFileName}`;
    let configFileData;
    try {
      configFileData = require(completePath);
    } catch (e) {
      throw e;
    }
    configObject[configType] = configFileData;
    return this;
  }

  getConfiguration() {
    return configObject;
  }

  createMap() {
    // createPrimaryKey(keyName);
    // createSubKey(keyName, primaryKeyName);
    // createOperations(subKeyName, operations);
  }
}

export default ABAC;
