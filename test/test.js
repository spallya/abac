import {ABAC, AccessControl } from '../index';

let abac = new ABAC();

abac.loadConfiguration('parent-child-mapping.json', './test/testMappings', 'parentChildMapping')
    .loadConfiguration('role-module-mapping.json', './test/testMappings', 'roleModuleMapping');

let accessControl = new AccessControl('superAdmin',abac.getConfiguration());

console.log(accessControl.read('M1'));

// console.log(JSON.stringify(abac.getConfiguration(), null, 2));

//
// let a = {};
// let ere = "hrllo";
//
// a[ere] = [].concat(["Q","W","E"]);
//
// console.log(a);
