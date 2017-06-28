class AccessControl {
  constructor(role, configObject) {
    this.role = role;
    this.configObject = configObject;
  }

  common(moduleName, operation) {
    if (this.configObject['roleModuleMapping'][this.role][moduleName]) {
      return this.configObject['roleModuleMapping'][this.role][moduleName]["operations"].indexOf(operation) !== -1;
    } else {
      return false;
    }
  }

  create(moduleName) {
    return this.common(moduleName, 'C');
  }

  read(moduleName) {
    return this.common(moduleName, 'R');
  }

  update(moduleName) {
    return this.common(moduleName, 'U');
  }

  delete(moduleName) {
    return this.common(moduleName, 'D');
  }
}

export default AccessControl;
