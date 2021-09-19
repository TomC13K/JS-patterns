
const componentInstance = require('./component');
const uuidInstance = require("./utils/uuid");

//calling sttaic class with constructor.
console.log("Index uuid: ", uuidInstance.constructor.generate());

//using component and calling function NON STATIC directly
console.log("component uuid: ", componentInstance.getComponentId());
