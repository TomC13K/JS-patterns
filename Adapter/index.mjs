import componentInstance from "./component.mjs"
import uuidInstance from "./utils/uuid.mjs"

//calling sttaic class with constructor.
console.log("Index uuid: ", uuidInstance.constructor.generate());

//using component and calling function NON STATIC directly
console.log("component uuid: ", componentInstance.getComponentId());
