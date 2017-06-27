import ABAC from '../index'

let abac = new ABAC();

abac.loadConfiguration('mockConfig.json', './test', 'parentChildMapping')
    .loadConfiguration('module-role-mapping.json', './test', 'moduleRoleMapping');
